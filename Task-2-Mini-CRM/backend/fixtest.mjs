import express from "express";
import { asyncHandler } from "./src/utils/asyncHandler.js";
const app = express();
app.use(express.json());

app.post("/broken", asyncHandler(async (req, res) => {
  throw new Error("simulated DB error");
}));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(4002, () => console.log("up"));
