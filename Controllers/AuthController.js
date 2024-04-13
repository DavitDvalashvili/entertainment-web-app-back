import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Function to handle user sign-up
export const signUp = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // Create a new user object with hashed password
  const newUser = new User({ email, password: hashedPassword });

  try {
    if (existingUser) {
      return res.status(201).json({ message: "User already exists" });
    }
    await newUser.save();
    res
      .status(201)
      .json({ message: "User signed up successfully", success: true });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to handle user sign-in
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(201).json({ message: "User not found" });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return res.json({ message: "Incorrect Password" });

    // Generate JWT token
    const token = jwt.sign({ id: validUser._id }, process.env.TOKEN_KEY);

    // eslint-disable-next-line no-unused-vars
    const { id, ...rest } = validUser;

    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      })
      .status(200)
      .json({ id, success: true, message: "User login successfully" });
  } catch (error) {
    console.error("signIn error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to handle user sign-out
export const signOut = async (req, res) => {
  try {
    // Clear the access_token cookie
    res.clearCookie("access_token");
    res.status(200).json({ message: "User has been logged out" });
  } catch (error) {
    console.error("signOut error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
