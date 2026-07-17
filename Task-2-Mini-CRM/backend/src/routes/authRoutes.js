import { Router } from "express";
import { body } from "express-validator";
import rateLimit from "express-rate-limit";
import { validate } from "../middleware/validate.js";
import { requireAuth } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { login, register, logout, me, setupStatus } from "../controllers/authController.js";

const router = Router();

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });

router.post(
  "/register",
  authLimiter,
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 8, max: 200 }),
  validate,
  asyncHandler(register)
);

router.post(
  "/login",
  authLimiter,
  body("email").isEmail().normalizeEmail(),
  body("password").isString().isLength({ min: 1, max: 200 }),
  validate,
  asyncHandler(login)
);

router.get("/setup-status", asyncHandler(setupStatus));
router.post("/logout", asyncHandler(logout));
router.get("/me", requireAuth, asyncHandler(me));

export default router;
