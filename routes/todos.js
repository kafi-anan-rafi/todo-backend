import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todos.js";
import { auth } from "../middleware/auth.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { createTodoSchema } from "../validators/todoValidation.js";
const router = Router();

router.get("/", auth, getTodos);
router.post("/", auth, validateSchema(createTodoSchema), createTodo);

export default router;
