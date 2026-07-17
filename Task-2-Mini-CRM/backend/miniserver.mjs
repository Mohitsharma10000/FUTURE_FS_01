import express from "express";
const app = express();
app.use(express.json());

// Simulates an unwrapped async controller, exactly like the real app
app.post("/broken", async (req, res) => {
  throw new Error("simulated DB error");
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(4001, () => console.log("up"));
