import { Login, Register } from "../controllers/auth.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { registerSchema, loginSchema } from "../validators/userValidation.js";
const router = Router();

router.post("/register", validateSchema(registerSchema), Register);
router.post("/login", validateSchema(loginSchema), Login);

export default router;
