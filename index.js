import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./Routes/authRoute.js";
import movieRouter from "./Routes/movieRoute.js";

// config dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//connect mongoDb using mongoose library;
mongoose
  .connect(MONGO_URL)
  .then(console.log("MongoDB is Connected successfully"))
  .catch((error) => {
    console.log(`mongoDB connection error ${error}`);
  });

// Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// Middleware to parse JSON request bodies
app.use(express.json());
// Middleware to parse cookies from incoming requests
app.use(cookieParser());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use("/api", authRouter);
app.use("/api", movieRouter);
