const movies = [
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/1998/trending/small.jpg",
        large: "./assets/thumbnails/1998/trending/large.jpg",
        id: "6432d9ef09b0273cd18c41c7",
      },
      regular: {
        small: "./assets/thumbnails/1998/regular/small.jpg",
        medium: "./assets/thumbnails/1998/regular/medium.jpg",
        large: "./assets/thumbnails/1998/regular/large.jpg",
        id: "6432d9ef09b0273cd18c41c8",
      },
    },
    title: "Silaga",
    year: 2021,
    category: "Movie",
    rating: "18+",
    isTrending: true,
    isBookmarked: true,
    id: "643124c1180865dc6a996f24",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-diary/regular/small.jpg",
        medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
        large: "./assets/thumbnails/the-diary/regular/large.jpg",
        id: "643280d009b0273cd18c401a",
      },
    },
    title: "The Diary",
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: false,
    id: "643124c1180865dc6a996f27",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "./assets/thumbnails/the-rockies/regular/large.jpg",
        id: "6432e5b709b0273cd18c4a9d",
      },
    },
    title: "The Rockies",
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: false,
    id: "643124c1180865dc6a996f2e",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/relentless/regular/small.jpg",
        medium: "./assets/thumbnails/relentless/regular/medium.jpg",
        large: "./assets/thumbnails/relentless/regular/large.jpg",
        id: "6432e3c409b0273cd18c475a",
      },
    },
    title: "Relentless",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f2f",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "./assets/thumbnails/the-heiress/regular/large.jpg",
        id: "6432e45209b0273cd18c48e0",
      },
    },
    title: "The Heiress",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f32",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/production-line/regular/small.jpg",
        medium: "./assets/thumbnails/production-line/regular/medium.jpg",
        large: "./assets/thumbnails/production-line/regular/large.jpg",
        id: "6437b2e54be04d2d50ff22e9",
      },
    },
    title: "Production Line",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f37",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/darker/regular/small.jpg",
        medium: "./assets/thumbnails/darker/regular/medium.jpg",
        large: "./assets/thumbnails/darker/regular/large.jpg",
        id: "64318d3a09b0273cd18c13f3",
      },
    },
    title: "Darker",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f3b",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
        id: "6432da1d09b0273cd18c41e0",
      },
    },
    title: "Mission: Saturn",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f3d",
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
        id: "64315970592749b8ea238e1e",
      },
      regular: {
        small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
        id: "64315970592749b8ea238e1f",
      },
    },
    title: "Undiscovered Cities",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: true,
    isTrending: true,
    id: "643124c1180865dc6a996f23",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
        id: "6432e49d09b0273cd18c4979",
      },
    },
    title: "During the Hunt",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f2a",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
        id: "6432e7bc09b0273cd18c4d27",
      },
    },
    title: "Same Answer II",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f2c",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/below-echo/regular/small.jpg",
        medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
        large: "./assets/thumbnails/below-echo/regular/large.jpg",
        id: "6433079e09b0273cd18c531f",
      },
    },
    title: "Below Echo",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f2d",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "./assets/thumbnails/off-the-track/regular/large.jpg",
        id: "6432e44709b0273cd18c48dd",
      },
    },
    title: "Off the Track",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f33",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "./assets/thumbnails/lone-heart/regular/large.jpg",
        id: "6432e52409b0273cd18c4a00",
      },
    },
    title: "Lone Heart",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f36",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/dogs/regular/small.jpg",
        medium: "./assets/thumbnails/dogs/regular/medium.jpg",
        large: "./assets/thumbnails/dogs/regular/large.jpg",
        id: "6431b9dc09b0273cd18c166c",
      },
    },
    title: "Dogs",
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f38",
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
        id: "64315837592749b8ea238ab8",
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
        id: "64315837592749b8ea238ab9",
      },
    },
    title: "Beyond Earth",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    isBookmarked: false,
    id: "643124c1180865dc6a996f21",
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
        _id: "643158f5592749b8ea238d9c",
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
        id: "643158f5592749b8ea238d9d",
      },
    },
    title: "Bottom Gear",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
    id: "643124c1180865dc6a996f22",
  },
  {
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
        _id: "643187e6e3f3bca55abfc009",
      },
      regular: {
        small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
        id: "643187e6e3f3bca55abfc00a",
      },
    },
    title: "Dark Side of the Moon",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
    id: "643124c1180865dc6a996f25",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
        id: "64318c203ef905b9c95aac76",
      },
    },
    title: "The Great Lands",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f26",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
        id: "6432da1909b0273cd18c41db",
      },
    },
    title: "No Land Beyond",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f29",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
        id: "6432e5da09b0273cd18c4b0c",
      },
    },
    title: "Autosport the Series",
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f2b",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
        id: "654a8d641303f8158845bda4",
      },
    },
    title: "Community of Ours",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f30",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/van-life/regular/small.jpg",
        medium: "./assets/thumbnails/van-life/regular/medium.jpg",
        large: "./assets/thumbnails/van-life/regular/large.jpg",
        id: "654a8d641303f8158845bda5",
      },
    },
    title: "Van Life",
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f31",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
        id: "6431e2a609b0273cd18c3bef",
      },
    },
    title: "Whispering Hill",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f34",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/112/regular/small.jpg",
        medium: "./assets/thumbnails/112/regular/medium.jpg",
        large: "./assets/thumbnails/112/regular/large.jpg",
        id: "654a8d641303f8158845bda6",
      },
    },
    title: "112",
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f35",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
        id: "654a8d641303f8158845bda7",
      },
    },
    title: "Unresolved Cases",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f3c",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
        id: "64318c263ef905b9c95aace1",
      },
    },
    title: "Earth’s Untouched",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f28",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
        id: "654a8d641303f8158845bda8",
      },
    },
    title: "Asia in 24 Days",
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f39",
  },
  {
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
        id: "6437cc8a4be04d2d50ff2c48",
      },
    },
    title: "The Tasty Tour",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
    id: "643124c1180865dc6a996f3a",
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

const movieSchema = new mongoose.Schema({
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

const moviesModel = mongoose.model("MoviesCollection", movieSchema);

mongoose
  .connect(URL)
  .then((result) => {
    console.log("Connected mongoDb");
    return moviesModel.find({});
  })
  .then((result) => {
    console.log("Movies found");
    result.forEach((movie) => {
      console.log(movie);

      mongoose.connection.close();
    });
  })
  .catch((error) => {
    console.log(`Have not connected ${error}`);
  });
