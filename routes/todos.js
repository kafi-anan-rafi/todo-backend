import { Router } from "express";
import { createTodo } from "../controllers/todos.js";
import { authenticateUser } from "../middleware/auth.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { createTodoSchema } from "../validators/todoValidation.js";
const router = Router();

router.post(
  "/",
  authenticateUser,
  validateSchema(createTodoSchema),
  createTodo
);

export default router;
