import { User } from "../models/user.js";
import { hashPassword } from "../utils/bcrypt.js";

export async function Register(req, res) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ name, email, password: hashedPassword });
    newUser.save();

    res.status(201).json({
      message: "User registered!",
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to register user", error: err });
  }
}
