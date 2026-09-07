import movies from "./250_top_imdb.js";
import { print } from "./print.js";

const filterObj = {};

export function handleSearch() {
    const genreFilter = document.getElementById("genre-filter");
    filterObj.genreFilter = genreFilter?.value;

    print();
}

export function filterMovies() {
    let fMovies = movies;
    if (filterObj.genreFilter && filterObj.genreFilter !== "all") {
        fMovies = fMovies.filter((g) =>
            g.categories.some((c) => c.title_en === filterObj.genreFilter),
        );
    }

    return fMovies;
}
