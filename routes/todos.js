import { Router } from "express";
import { getTodos } from "../controllers/todos.js";
import { authenticateUser } from "../middleware/auth.js";
const router = Router();

router.get("/", authenticateUser, getTodos);

export default router;
