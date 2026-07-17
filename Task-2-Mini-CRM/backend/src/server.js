import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import xssClean from "xss-clean";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import { notFound, errorHandler } from "./middleware/error.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: (process.env.CORS_ORIGIN || "http://localhost:5173").split(","),
    credentials: true,
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xssClean());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// Async error wrapper (default 404 + error handler)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`API running on :${PORT}`)))
  .catch((err) => {
    console.error("Failed to start:", err);
    process.exit(1);
  });

// Wrap async route handlers to forward errors
process.on("unhandledRejection", (e) => console.error("unhandledRejection", e));
