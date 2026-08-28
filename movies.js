const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
    price: 5,
    duration: 148,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    price: 4,
    duration: 152,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    price: 6,
    duration: 169,
  },
  {
    id: 4,
    title: "The Godfather",
    genre: "Drama",
    year: 1972,
    rating: 9.2,
    price: 3,
    duration: 175,
  },
  {
    id: 5,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    price: 5,
    duration: 132,
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    price: 7,
    duration: 181,
  },
  {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    year: 1999,
    rating: 8.7,
    price: 4,
    duration: 136,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
    price: 5,
    duration: 154,
  },
  {
    id: 9,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
    price: 4,
    duration: 142,
  },
  {
    id: 10,
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
    price: 3,
    duration: 142,
  },
  {
    id: 11,
    title: "Fight Club",
    genre: "Drama",
    year: 1999,
    rating: 8.8,
    price: 5,
    duration: 139,
  },
  {
    id: 12,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    price: 5,
    duration: 155,
  },
  {
    id: 13,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    rating: 7.9,
    price: 4,
    duration: 194,
  },
  {
    id: 14,
    title: "The Lord of the Rings",
    genre: "Fantasy",
    year: 2001,
    rating: 8.8,
    price: 6,
    duration: 178,
  },
  {
    id: 31,
    title: "Black Panther",
    genre: "Action",
    year: 2018,
    rating: 7.3,
    price: 6,
    duration: 134,
  },
  {
    id: 32,
    title: "Guardians of the Galaxy",
    genre: "Action",
    year: 2014,
    rating: 8.0,
    price: 5,
    duration: 121,
  },
  {
    id: 33,
    title: "Jurassic Park",
    genre: "Adventure",
    year: 1993,
    rating: 8.2,
    price: 4,
    duration: 127,
  },
  {
    id: 34,
    title: "Back to the Future",
    genre: "Adventure",
    year: 1985,
    rating: 8.5,
    price: 4,
    duration: 116,
  },
  {
    id: 35,
    title: "Indiana Jones",
    genre: "Adventure",
    year: 1981,
    rating: 8.4,
    price: 4,
    duration: 115,
  },
  {
    id: 36,
    title: "The Truman Show",
    genre: "Comedy",
    year: 1998,
    rating: 8.2,
    price: 4,
    duration: 103,
  },
  {
    id: 37,
    title: "La La Land",
    genre: "Musical",
    year: 2016,
    rating: 8.0,
    price: 5,
    duration: 128,
  },
  {
    id: 38,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    price: 5,
    duration: 99,
  },
  {
    id: 39,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    rating: 8.1,
    price: 6,
    duration: 120,
  },
  {
    id: 40,
    title: "A Beautiful Mind",
    genre: "Drama",
    year: 2001,
    rating: 8.2,
    price: 4,
    duration: 135,
  },
  {
    id: 41,
    title: "The Social Network",
    genre: "Drama",
    year: 2010,
    rating: 7.8,
    price: 5,
    duration: 120,
  },
  {
    id: 42,
    title: "Shutter Island",
    genre: "Mystery",
    year: 2010,
    rating: 8.2,
    price: 5,
    duration: 138,
  },
  {
    id: 43,
    title: "Memento",
    genre: "Mystery",
    year: 2000,
    rating: 8.4,
    price: 4,
    duration: 113,
  },
  {
    id: 44,
    title: "The Revenant",
    genre: "Adventure",
    year: 2015,
    rating: 8.0,
    price: 6,
    duration: 156,
  },
  {
    id: 45,
    title: "Bohemian Rhapsody",
    genre: "Biography",
    year: 2018,
    rating: 7.9,
    price: 5,
    duration: 134,
  },
  {
    id: 46,
    title: "Oppenheimer",
    genre: "Biography",
    year: 2023,
    rating: 8.6,
    price: 8,
    duration: 180,
  },
  {
    id: 47,
    title: "Barbie",
    genre: "Comedy",
    year: 2023,
    rating: 6.8,
    price: 7,
    duration: 114,
  },
  {
    id: 48,
    title: "Dune",
    genre: "Sci-Fi",
    year: 2021,
    rating: 8.0,
    price: 7,
    duration: 155,
  },
  {
    id: 49,
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    rating: 8.2,
    price: 7,
    duration: 130,
  },
  {
    id: 50,
    title: "Everything Everywhere All at Once",
    genre: "Sci-Fi",
    year: 2022,
    rating: 7.8,
    price: 6,
    duration: 139,
  },
];
// const result = movies.map((movie) => {
//   return movie.title + "-" + movie.year;
// });
// console.log(result);

// const expensive = movies.reduce((max, movie) => {
//   return movie.price > max.price ? movie : max;
// });

// const cheap = movies.reduce((min, movie) => {
//   return movie.price < min.price ? movie : min;
// });

// console.log(expensive.title);
// console.log(cheap.title);

// const result = movies.find((movie) => {
//   return movie.title === "Interstellar";
// });
// console.log(result.year);

// const result = movies.find((movie) => {
//   return movie.title === "Dune";
// });
// console.log(result.duration);
// console.log(result.rating);

// const result = movies.some((movie) => {
//   return movie.year > 2025;
// });
// console.log(result);

// const result = movies.some((movie) => {
//   return movie.genre === "Comedy";
// });
// console.log(result);

// const result = movies.every((movie) => {
//   return movie.price < 10;
// });
// console.log(result);

// const genres = movies.map((movie) => {
//   return movie.genre;
// });
// const result = genres.includes("Horror");
// console.log(result);

// const result = movies
//   .sort((a, b) => b.rating - a.rating)
//   .map((movie) => movie.title);

// console.log(result);

const result = movies
  .filter((movie) => movie.year > 2015)
  .map((movie) => movie.title);
console.log(result);
