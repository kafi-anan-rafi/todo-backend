import { Router } from "express";
import { createTodo, getTodo, getTodos, updateTodo } from "../controllers/todos.js";
import { auth } from "../middleware/auth.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { createTodoSchema, updateTodoSchema } from "../validators/todoValidation.js";
const router = Router();

router.get("/", auth, getTodos);
router.get("/:id", auth, getTodo);
router.post("/", auth, validateSchema(createTodoSchema), createTodo);
router.put("/:id", auth, validateSchema(updateTodoSchema), updateTodo);

export default router;
