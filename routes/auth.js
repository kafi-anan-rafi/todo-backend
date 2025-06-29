import { Register } from "../controllers/auth.js";
import { Router } from "express";
const router = Router();

router.post("/register", Register);

export default router;
