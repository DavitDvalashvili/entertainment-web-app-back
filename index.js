import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./Routes/Route.js";
//import moviesModel from "./model/movieModel.js";

// config dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());

app.use(express.json());

// Handle preflight requests
app.options("*", cors());

//connect mongoDb using mongoose library;
mongoose
  .connect(MONGO_URL)
  .then(
    //moviesModel.insertMany(allMovies)
    console.log("MongoDB is Connected successfully")
  )
  .catch((error) => {
    console.log(`mongoDB connection error ${error}`);
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use("/", router);
