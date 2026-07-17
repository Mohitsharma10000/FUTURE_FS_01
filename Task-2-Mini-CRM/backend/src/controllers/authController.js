import jwt from "jsonwebtoken";
import User from "../models/User.js";

function signToken(user) {
  return jwt.sign({ sub: user._id.toString(), role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
}

function setAuthCookie(res, token) {
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.COOKIE_SECURE === "true",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export async function register(req, res) {
  const { email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ error: "Email already registered" });

  // This is a single-admin system: only the very first account may register.
  // Once an admin exists, registration is closed — no sales_rep dead-end accounts.
  const adminExists = await User.exists({ role: "admin" });
  if (adminExists) {
    return res.status(403).json({ error: "Registration is closed. An admin account already exists — contact your admin for access." });
  }

  const passwordHash = await User.hashPassword(password);
  const user = await User.create({ email, passwordHash, role: "admin" });
  const token = signToken(user);
  setAuthCookie(res, token);
  res.status(201).json({ user: { id: user._id, email: user.email, role: user.role }, token });
}

export async function setupStatus(req, res) {
  const adminExists = await User.exists({ role: "admin" });
  res.json({ adminExists: !!adminExists });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const ok = await user.verifyPassword(password);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = signToken(user);
  setAuthCookie(res, token);
  res.json({ user: { id: user._id, email: user.email, role: user.role }, token });
}

export async function logout(req, res) {
  res.clearCookie("token");
  res.json({ ok: true });
}

export async function me(req, res) {
  res.json({ user: { id: req.user._id, email: req.user.email, role: req.user.role } });
}
