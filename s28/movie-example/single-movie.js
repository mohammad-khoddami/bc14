import movies from "./250_top_imdb.js";

const container = document.getElementById("container");

function singleProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const movie = movies.find((m) => m.id === id);
    console.log(movie);

    container.innerHTML = `<img src=${movie.pic.movie_img_b} alt="${movie.movie_title}"/>`;
}
singleProduct();
