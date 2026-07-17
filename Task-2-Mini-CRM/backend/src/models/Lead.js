import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true, maxlength: 2000 },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const LeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 40 },
    message: { type: String, trim: true, maxlength: 5000 },
    source: { type: String, default: "website_contact_form", maxlength: 80 },
    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new",
      index: true,
    },
    notes: [NoteSchema],
    lastContactedAt: { type: Date },
  },
  { timestamps: true }
);

LeadSchema.index({ name: "text", email: "text", message: "text" });

export default mongoose.model("Lead", LeadSchema);
