import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";
dotenv.config();
import "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Todo backend!" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}....`);
});
