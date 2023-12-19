import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// config dotenv
dotenv.config();

const Token_Key = process.env.Token_Key;

export const createSecretToken = (id) => {
  return jwt.sign({ id }, Token_Key, {
    expiresIn: "120m",
  });
};
