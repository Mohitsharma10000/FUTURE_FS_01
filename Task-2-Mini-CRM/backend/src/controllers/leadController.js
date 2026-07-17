import Lead from "../models/Lead.js";

export async function createLead(req, res) {
  const { name, email, phone, message, source } = req.body;
  const lead = await Lead.create({
    name,
    email,
    phone,
    message,
    source: source || "website_contact_form",
  });
  res.status(201).json({ id: lead._id, status: lead.status, createdAt: lead.createdAt });
}

export async function listLeads(req, res) {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
  const skip = (page - 1) * limit;

  const filter = {};
  if (req.query.status) filter.status = req.query.status;
  if (req.query.q) {
    const rx = new RegExp(String(req.query.q).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    filter.$or = [{ name: rx }, { email: rx }, { message: rx }];
  }
  if (req.query.from || req.query.to) {
    filter.createdAt = {};
    if (req.query.from) filter.createdAt.$gte = new Date(req.query.from);
    if (req.query.to) filter.createdAt.$lte = new Date(req.query.to);
  }

  const sort = req.query.sort === "oldest" ? { createdAt: 1 } : { createdAt: -1 };

  const [items, total] = await Promise.all([
    Lead.find(filter).sort(sort).skip(skip).limit(limit),
    Lead.countDocuments(filter),
  ]);

  res.json({ items, page, limit, total, pages: Math.ceil(total / limit) });
}

export async function getLead(req, res) {
  const lead = await Lead.findById(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found" });
  res.json(lead);
}

export async function updateStatus(req, res) {
  const { status } = req.body;
  const update = { status };
  if (status === "contacted") update.lastContactedAt = new Date();
  const lead = await Lead.findByIdAndUpdate(req.params.id, update, { new: true });
  if (!lead) return res.status(404).json({ error: "Lead not found" });
  res.json(lead);
}

export async function addNote(req, res) {
  const { text } = req.body;
  const lead = await Lead.findById(req.params.id);
  if (!lead) return res.status(404).json({ error: "Lead not found" });
  lead.notes.push({ text, createdBy: req.user?._id });
  lead.lastContactedAt = new Date();
  await lead.save();
  res.status(201).json(lead);
}

export async function stats(req, res) {
  const [total, byStatusAgg, weekAgg] = await Promise.all([
    Lead.countDocuments(),
    Lead.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
    Lead.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
    }),
  ]);
  const byStatus = { new: 0, contacted: 0, converted: 0 };
  byStatusAgg.forEach((r) => (byStatus[r._id] = r.count));
  const conversionRate = total ? byStatus.converted / total : 0;
  res.json({ total, byStatus, thisWeek: weekAgg, conversionRate });
}
