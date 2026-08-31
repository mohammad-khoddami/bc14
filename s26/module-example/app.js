import { movies } from "./movies.js";

const movieDiv = document.getElementById("movie-div");

const movieTitle = movies.map((m) => `<p>${m.title}</p>`);

movieDiv.innerHTML = movieTitle.join("");
