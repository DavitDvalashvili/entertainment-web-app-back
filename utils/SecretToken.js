import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// config dotenv
dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY;

export const createSecretToken = (id) => {
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: "120m",
  });
};
