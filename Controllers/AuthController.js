import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/SecretToken.js";

export const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(201).json({ message: "User already exists" });
    }
    User.create({ email, password });
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true });
    next();
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(201).json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.status(201).json({
      success: true,
      message: "User login successfully",
      token: token,
    });
    next();
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
