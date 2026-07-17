import { Router } from "express";
import { body, param } from "express-validator";
import rateLimit from "express-rate-limit";
import { validate } from "../middleware/validate.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  createLead,
  listLeads,
  getLead,
  updateStatus,
  addNote,
  stats,
} from "../controllers/leadController.js";

const router = Router();

const publicLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10 });

// Public: submit lead
router.post(
  "/",
  publicLimiter,
  body("name").isString().trim().isLength({ min: 1, max: 120 }),
  body("email").isEmail().normalizeEmail(),
  body("phone").optional().isString().isLength({ max: 40 }),
  body("message").optional().isString().isLength({ max: 5000 }),
  body("source").optional().isString().isLength({ max: 80 }),
  validate,
  asyncHandler(createLead)
);

// Admin only
router.get("/", requireAuth, requireRole("admin"), asyncHandler(listLeads));
router.get("/stats/summary", requireAuth, requireRole("admin"), asyncHandler(stats));
router.get("/:id", requireAuth, requireRole("admin"), param("id").isMongoId(), validate, asyncHandler(getLead));

router.patch(
  "/:id/status",
  requireAuth,
  requireRole("admin"),
  param("id").isMongoId(),
  body("status").isIn(["new", "contacted", "converted"]),
  validate,
  asyncHandler(updateStatus)
);

router.post(
  "/:id/notes",
  requireAuth,
  requireRole("admin"),
  param("id").isMongoId(),
  body("text").isString().trim().isLength({ min: 1, max: 2000 }),
  validate,
  asyncHandler(addNote)
);

export default router;
