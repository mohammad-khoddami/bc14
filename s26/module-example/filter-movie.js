// import { movies, movies2 as m2 } from "./movies.js";
// import movies3 from "./movies.js";
import * as mov from "./movies.js";

const fm = mov.movies.filter(
    (m) => m.genre === "Drama" && m.year > 2010 && m.rating > 7.5,
);
console.log(fm);

console.log(mov.movies2);
console.log(mov.default);
