import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["admin", "sales_rep"], default: "admin" },
  },
  { timestamps: true }
);

UserSchema.methods.verifyPassword = function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 12);
};

export default mongoose.model("User", UserSchema);
