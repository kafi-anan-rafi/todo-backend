import { User } from "../models/user.js";

export async function Register(req, res) {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });

  res.json({ name, email, password });
}
