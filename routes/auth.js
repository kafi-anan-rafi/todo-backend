import { Login, Register } from "../controllers/auth.js";
import { Router } from "express";
const router = Router();

router.post("/register", Register);
router.post("/login", Login);

export default router;
