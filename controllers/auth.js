import { User } from "../models/user.js";

export async function Register(req, res) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const newUser = new User({ name, email, password });
    newUser.save();

    const safeUser = {
      name: newUser.name,
      email: newUser.email,
    };

    res.status(201).json({ message: "User registered!", user: safeUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to register user", error: err });
  }
}
