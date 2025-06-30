import { User } from "../models/user.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
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
    const token = generateToken({ id: newUser._id, email: newUser.email });

    return res.status(201).json({
      message: "User registered!",
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to register user", error: err });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: "User doesn't exists!" });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken({ id: user._id, email: user.email });
    return res.status(200).json({ message: "User logged in!", token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to login user", error: err });
  }
}
