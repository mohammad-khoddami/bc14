import { movies } from "./movies.js";
import { genreColors } from "./genre.js";
const container = document.querySelector("#movies-container");
const genreFilter = document.querySelector("#genreFilter");
const genres = [...new Set(movies.map((movie) => movie.categories[0].title))];
genreFilter.innerHTML += genres
  .map((genre) => `<option value=${genre}>${genre}</option>`)
  .join("");
function showMovies(movieList) {
  container.innerHTML = movieList
    .map((movie) => {
      return `
        <div class="card">
          <img class="card-img" src="${movie.pic.movie_img_m}" alt="${movie.movie_title}">
          <div class="card-info">
            <h3 class="card-title">${movie.movie_title}</h3>
            <p class="card-year">${movie.pro_year}</p>
            <p class="card-rating">${movie.imdb_rate}</p>
            <p class="card-duration">${movie.duration.text}</p>
            <p class="card-director">${movie.director}</p>
          </div>
        </div>`;
    })
    .join("");
}
showMovies(movies);
genreFilter.addEventListener("change", (event) => {
  const selectedGenre = event.target.value;
  if (selectedGenre === "") {
    showMovies(movies);
    return;
  }

  const filteredMovies = movies.filter((movie) =>
    movie.categories.some((category) => category.title === selectedGenre),
  );

  showMovies(filteredMovies);
});
