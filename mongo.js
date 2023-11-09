const allMovies = [
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/1998/trending/small.jpg",
        large: "./assets/thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/1998/regular/small.jpg",
        medium: "./assets/thumbnails/1998/regular/medium.jpg",
        large: "./assets/thumbnails/1998/regular/large.jpg",
      },
    },
    title: "Silaga",
    year: 2021,
    category: "Movie",
    rating: "18+",
    isTrending: true,
    isBookmarked: true,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-diary/regular/small.jpg",
        medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
        large: "./assets/thumbnails/the-diary/regular/large.jpg",
      },
    },
    title: "The Diary",
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "./assets/thumbnails/the-rockies/regular/large.jpg",
      },
    },
    title: "The Rockies",
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/relentless/regular/small.jpg",
        medium: "./assets/thumbnails/relentless/regular/medium.jpg",
        large: "./assets/thumbnails/relentless/regular/large.jpg",
      },
    },
    title: "Relentless",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "./assets/thumbnails/the-heiress/regular/large.jpg",
      },
    },
    title: "The Heiress",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/production-line/regular/small.jpg",
        medium: "./assets/thumbnails/production-line/regular/medium.jpg",
        large: "./assets/thumbnails/production-line/regular/large.jpg",
      },
    },
    title: "Production Line",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/darker/regular/small.jpg",
        medium: "./assets/thumbnails/darker/regular/medium.jpg",
        large: "./assets/thumbnails/darker/regular/large.jpg",
      },
    },
    title: "Darker",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    title: "Mission: Saturn",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    title: "Undiscovered Cities",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: true,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    title: "During the Hunt",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    title: "Same Answer II",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/below-echo/regular/small.jpg",
        medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
        large: "./assets/thumbnails/below-echo/regular/large.jpg",
      },
    },
    title: "Below Echo",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "./assets/thumbnails/off-the-track/regular/large.jpg",
      },
    },
    title: "Off the Track",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "./assets/thumbnails/lone-heart/regular/large.jpg",
      },
    },
    title: "Lone Heart",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/dogs/regular/small.jpg",
        medium: "./assets/thumbnails/dogs/regular/medium.jpg",
        large: "./assets/thumbnails/dogs/regular/large.jpg",
      },
    },
    title: "Dogs",
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    title: "Beyond Earth",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    isBookmarked: false,
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    title: "Bottom Gear",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    title: "Dark Side of the Moon",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    title: "The Great Lands",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    title: "No Land Beyond",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    title: "Autosport the Series",
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    title: "Community of Ours",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/van-life/regular/small.jpg",
        medium: "./assets/thumbnails/van-life/regular/medium.jpg",
        large: "./assets/thumbnails/van-life/regular/large.jpg",
      },
    },
    title: "Van Life",
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    title: "Whispering Hill",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/112/regular/small.jpg",
        medium: "./assets/thumbnails/112/regular/medium.jpg",
        large: "./assets/thumbnails/112/regular/large.jpg",
      },
    },
    title: "112",
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    title: "Unresolved Cases",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    title: "Earth’s Untouched",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    title: "Asia in 24 Days",
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    title: "The Tasty Tour",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
];



import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/MoviesDb";

const thumbnailSchema = new mongoose.Schema({
  small: String,
  medium: String,
  large: String,
  id: String,
});

export const movieSchema = new mongoose.Schema({
  thumbnail: {
    trending: thumbnailSchema,
    regular: thumbnailSchema,
  },
  title: String,
  year: Number,
  category: String,
  rating: String,
  isTrending: Boolean,
  isBookmarked: Boolean,
  id: String,
});

movieSchema.set('toJSON', {
  transform: (Document, returnObject) => {
    returnObject.id = returnObject._id.toString();
    delete returnObject._id;
    delete returnObject.__v;
  }
})

const moviesModel = mongoose.model("MoviesCollection", movieSchema);

mongoose
  .connect(URL)
  .then((result) => {
    console.log("Connected mongoDb");
    //moviesModel.insertMany(allMovies);
    return moviesModel.find({});
  })
  .then((result) => {
    console.log("Movies found");
    result.forEach((movie) => {
      console.log(movie);
    });
    //return mongoose.connection.close();
  })
  .catch((error) => {
    console.log(`Have not connected ${error}`);
  });

export default moviesModel;