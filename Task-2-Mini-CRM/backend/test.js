import "dotenv/config";
import mongoose from "mongoose";

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });