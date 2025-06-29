import { Router } from "express";
import { getTodos } from "../controllers/todos.js";
const router = Router();

router.get("/", getTodos);

export default router;
