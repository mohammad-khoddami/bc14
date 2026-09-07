import { handleSearch } from "./filter.js";
import { print, printGenre } from "./print.js";

print();
printGenre();

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);
