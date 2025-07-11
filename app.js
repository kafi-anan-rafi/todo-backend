import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({ msg: "Todo backend!" });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}....`);
});
