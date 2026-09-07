import movies from "./250_top_imdb.js";
import { filterMovies } from "./filter.js";
import genreColors from "./genre.js";

const movieWrapper = document.getElementById("movie-wrapper");

export function print() {
    const fMovies = filterMovies();
    const newMovies = fMovies
        .map((m) => {
            return `
        <div class="card">
            <img
                src='${m.pic.movie_img_s}'
                alt='${m.movie_title}'
                height="200px"
            />
                <div class="content">
                <h5>${m.movie_title}</h5>
                <div class="rate">
                    <div class="rate-per">
                        <span>${m.avg_rate_label}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16px"
                            height="16px"
                            fill="gray"
                        >
                            <path
                                id="ui-icon-like_fill"
                                d="M12.68 21a17.2 17.2 0 0 1-4.57-1.12l-.31-.1a5 5 0 0 0-.88-.2l-2.5-.31v-8.94l2.63-.42a9.1 9.1 0 0 0 2.43-3.07c.24-.58.42-1.12.58-1.57.08-.24.16-.47.23-.66a3.66 3.66 0 0 1 1-1.49l.12-.12h.14c.91-.11 2.78.08 3.24 1.7a5.7 5.7 0 0 1-.12 2.93l-.41 1.1h2.68a2.56 2.56 0 0 1 1.85.77 2.48 2.48 0 0 1 .79 1.84 2.83 2.83 0 0 1-.58 1.73 2.6 2.6 0 0 1 .12.74 2.77 2.77 0 0 1-.44 1.6 2.9 2.9 0 0 1-.05 1.33 2.76 2.76 0 0 1-.6 1.09 3 3 0 0 1-.64 2.17 3.27 3.27 0 0 1-2.58 1Z"
                            ></path>
                        </svg>
                    </div>
                    <span>${m.imdb_rate}/10 IMDB</span>
                </div>
                <div class="genre">
                    ${m.categories
                        .map((genre) => {
                            return `
                            <span style='color: ${genreColors[genre.title_en].color}; background-color: ${genreColors[genre.title_en].background}'>${genre.title}</span>
                        `;
                        })
                        .join("")}
                </div>
                <span class="duration">${m.duration.text}</span>
            </div>

        </div>
        `;
        })
        .join("");
    movieWrapper.innerHTML = newMovies;
}

const genreFilter = document.getElementById("genre-filter");
export function printGenre() {
    const res = movies
        .map((m) => m.categories)
        .flat()
        .reduce((res, cur) => {
            if (!res.some((i) => i.title_en === cur.title_en)) res.push(cur);
            return res;
        }, []);

    const gf = res.map((g) => {
        return `
            <option value='${g.title_en}'>${g.title}</option>
            `;
    });

    genreFilter.innerHTML = `<option value="all">همه</option>` + gf;
}
