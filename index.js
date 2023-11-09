import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import moviesModel from "./mongo.js";


const app = express();
app.use(cors());
app.use(express.json());

const URL = "mongodb://localhost:27017/MoviesDb";
mongoose.connect(URL);

app.get('/', async(req, res) => {
    const movies = await moviesModel.find({});
    res.send(movies);
    //console.log(movies.length);
})

app.get('/movies', async(req, res) => {
    const movies = await moviesModel.find({"category": "Movie"})
    res.send(movies);
    //console.log(movies.length);
})

app.get('/tvSeries', async(req, res) => {
    const series = await moviesModel.find({"category": "TV Series"})
    res.send(series);
    //console.log(series.length)
})

app.get('/bookmarks', async(req, res) => {
    const bookmarks = await moviesModel.find({"isBookmarked": true})
    res.send(bookmarks);
    console.log(bookmarks.length)
})

app.put('/', async(req, res) => {
    const updatedMovie = await moviesModel.updateOne({"id": req.body.id}, )
})



app.listen(3002, () => {
    console.log("Express server started on the port 3002")
} )
