import "dotenv/config";
import { connectDB } from "../config/db.js";
import User from "../models/User.js";
import Lead from "../models/Lead.js";

const sampleLeads = [
  { name: "Alice Johnson", email: "alice@example.com", phone: "555-0101", message: "Interested in your enterprise plan.", status: "new" },
  { name: "Bob Smith", email: "bob@example.com", phone: "555-0102", message: "Please call me back.", status: "contacted" },
  { name: "Carol Davis", email: "carol@example.com", message: "Signed up after demo.", status: "converted" },
  { name: "Dan Lee", email: "dan@example.com", message: "Question about pricing.", status: "new" },
  { name: "Eve Martin", email: "eve@example.com", phone: "555-0105", message: "Requesting a callback.", status: "contacted" },
];

async function run() {
  await connectDB(process.env.MONGO_URI);

  const adminEmail = process.env.SEED_ADMIN_EMAIL || "admin@example.com";
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || "admin12345";

  const existing = await User.findOne({ email: adminEmail });
  if (!existing) {
    const passwordHash = await User.hashPassword(adminPassword);
    await User.create({ email: adminEmail, passwordHash, role: "admin" });
    console.log(`Seeded admin: ${adminEmail} / ${adminPassword}`);
  } else {
    console.log(`Admin ${adminEmail} already exists`);
  }

  await Lead.deleteMany({ email: { $in: sampleLeads.map((l) => l.email) } });
  await Lead.insertMany(sampleLeads);
  console.log(`Seeded ${sampleLeads.length} leads`);

  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
