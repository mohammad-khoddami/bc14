getRecipes();

const recipeDiv = document.getElementById("recipes");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const tagElement = document.getElementById("tags");

async function getRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();

        printRecipes(result.recipes);
        getTags();
    } catch (error) {
        console.log(error);
    }
}

async function getTags() {
    try {
        const response = await fetch("https://dummyjson.com/recipes/tags");
        const result = await response.json();

        printTags(result);
    } catch (error) {
        console.log(error);
    }
}

function printRecipes(recipeList) {
    const divs = recipeList.map((item) => {
        return `<div>
        <img src="${item.image}"/>
        <p>${item.name}</p>
        </div>`;
    });

    recipeDiv.innerHTML = divs.join("");
}

function printTags(tags) {
    const options = tags.map((t) => {
        return `<option value="${t}">${t}</option>`;
    });
    tagElement.innerHTML = options;
}
tagElement.addEventListener("change", handleSearchByTag);
searchInput.addEventListener("keyup", handleSearch);

async function handleSearch() {
    const searchedVal = searchInput.value;

    try {
        const response = await fetch(
            `https://dummyjson.com/recipes/search?q=${searchedVal}`,
        );
        const result = await response.json();

        printRecipes(result.recipes);
    } catch (error) {
        console.log(error);
    }
}

async function handleSearchByTag() {
    const selectedTag = tagElement.value;
    try {
        const response = await fetch(
            `https://dummyjson.com/recipes/tag/${selectedTag}`,
        );
        const result = await response.json();

        printRecipes(result.recipes);
    } catch (error) {
        console.log(error);
    }
}
