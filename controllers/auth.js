import { User } from "../models/user.js";
import { hashPassword } from "../utils/bcrypt.js";
import { generateToken } from "../utils/token.js";

export async function Register(req, res) {
  try {
    const { name, email, password } = req.body;
    const normalizedEmail = email.toLowerCase();

    const userExist = await User.findOne({ email: normalizedEmail });
    if (userExist) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });
    await newUser.save();
    const token = generateToken({ id: newUser._id });

    res.status(201).json({
      message: "User registered!",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to register user", error: err });
  }
}
