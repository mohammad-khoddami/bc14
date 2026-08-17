var categories = [];

var products = JSON.parse(localStorage.getItem("products")) || [];

var nameInput = document.getElementById("product-name");
var categoryInput = document.getElementById("product-category");
var priceInput = document.getElementById("product-price");
var quantityInput = document.getElementById("product-quantity");

var tableBody = document.getElementById("table-body");
var select = document.getElementById("filter-category");
var filterByName = document.getElementById("filter-name");
var addBtn = document.getElementById("add-btn");

var editItem = null;

nameInput.focus();

function print(filter = { category: "all", name: "" }) {
    var tableRows = "";
    for (var i = 0; i < products.length; i++) {
        if (
            (filter.category === "all" ||
                products[i].category === filter.category) &&
            (!filter.name ||
                products[i].name
                    .toLowerCase()
                    .startsWith(filter.name.toLowerCase()))
        ) {
            tableRows += `<tr>
                <td>${products[i].name}</td>
                <td>${products[i].category}</td>
                <td>${products[i].price}</td>
                <td>${products[i].quantity}</td>
                <td class="table-action"><button onclick='handleEdit(${i})'>Edit</button><button onclick='handleDelete(${i})'>Delete</button></td>
            </tr>`;
        }
    }
    tableBody.innerHTML = tableRows;
}

function printCategory() {
    var selectOptions = `<option value='all' ${select.value === "all" && "selected"}>All</option>`;
    for (var i = 0; i < categories.length; i++) {
        var selected = categories[i] === select.value ? "selected" : "";
        selectOptions += `
        <option value='${categories[i]}' ${selected}>${categories[i]}</option>
        `;
    }
    select.innerHTML = selectOptions;
}

function handleAdd(e) {
    e.preventDefault();

    var name = nameInput.value.trim();
    var category = categoryInput.value.trim();
    var price = priceInput.value.trim();
    var quantity = quantityInput.value.trim();

    if (!name || !category || !price || !quantity) {
        alert("filed required");
        return;
    }

    var foundProduct = false;
    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase() === name.toLowerCase()) {
            foundProduct = true;
        }
    }

    var foundCat = false;
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].toLowerCase() === category.toLowerCase()) {
            foundCat = true;
        }
    }

    if (!foundProduct) {
        var catIndex = categories.length;
        for (var k = 0; k < categories.length; k++) {
            if (category === categories[k]) {
                catIndex = k;
            }
        }
        if (!foundCat) {
            categories[catIndex] = category;
        }
        if (editItem === null) {
            products[products.length] = {
                name,
                category: categories[catIndex],
                price,
                quantity,
            };
        } else {
            products[editItem].name = name;
            products[editItem].category = categories[catIndex];
            products[editItem].price = price;
            products[editItem].quantity = quantity;
            addBtn.innerText = "Add";
            editItem = null;
        }
        nameInput.value = "";
        categoryInput.value = "";
        priceInput.value = "";
        quantityInput.value = "";
        nameInput.focus();
    } else {
        alert("product exist");
    }
    updateLocalStorage();
    print();
    printCategory();
}

function handleFilterCategory() {
    print({ category: select.value, name: filterByName.value });
}

function handleFilterName() {
    print({ category: select.value, name: filterByName.value });
}

function handleDelete(index) {
    var newProducts = [];
    for (var i = 0; i < products.length; i++) {
        if (i !== index) {
            newProducts[newProducts.length] = products[i];
        }
    }
    products = newProducts;
    updateCategories();
    print({ category: select.value, name: filterByName.value });
    printCategory();
    updateLocalStorage();
}

function handleEdit(index) {
    nameInput.value = products[index].name;
    categoryInput.value = products[index].category;
    priceInput.value = products[index].price;
    quantityInput.value = products[index].quantity;
    addBtn.innerText = "Edit";
    editItem = index;
}

function updateCategories() {
    var newCategories = [];
    for (var i = 0; i < categories.length; i++) {
        var found = false;
        for (var j = 0; j < products.length; j++) {
            if (products[j].category === categories[i]) {
                found = true;
                break;
            }
        }
        if (found) {
            newCategories[newCategories.length] = categories[i];
        }
    }
    categories = newCategories;
}

function updateLocalStorage() {
    localStorage.setItem("products", JSON.stringify(products));
}

print();
printCategory();
