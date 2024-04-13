import express from "express";
import { signUp } from "../Controllers/AuthController.js";
import { signIn } from "../Controllers/AuthController.js";
import { signOut } from "../Controllers/AuthController.js";

const router = express.Router();

// Route to handle user sign up
router.post("/signUp", signUp);

// Route to handle user sign in
router.post("/signIn", signIn);

// Route to handle user sign out
router.get("/signOut", signOut);

export default router;
