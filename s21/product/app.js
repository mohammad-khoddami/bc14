var categories = ["electronics", "fashion"];

var products = [
    { name: "Laptop", category: categories[0], price: 1000, quantity: 10 },
    { name: "Shoes", category: categories[1], price: 80, quantity: 15 },
    { name: "iphone", category: categories[0], price: 625, quantity: 25 },
];

var tableBody = document.getElementById("table-body");
var select = document.getElementById("filter-category");
var filterByName = document.getElementById("filter-name");

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
                <td class="table-action"><button>Edit</button><button>Delete</button></td>
            </tr>`;
        }
    }
    tableBody.innerHTML = tableRows;

    var selectOptions = `<option value='all' ${filter.category === "all" && "selected"}>All</option>`;
    for (var i = 0; i < categories.length; i++) {
        var selected = categories[i] === filter.category ? "selected" : "";
        selectOptions += `
        <option value='${categories[i]}' ${selected}>${categories[i]}</option>
        `;
    }
    select.innerHTML = selectOptions;
}

function handleAdd(e) {
    e.preventDefault();

    var name = document.getElementById("product-name").value.trim();
    var category = document.getElementById("product-category").value.trim();
    var price = document.getElementById("product-price").value.trim();
    var quantity = document.getElementById("product-quantity").value.trim();

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
        if (!foundCat) {
            categories[catIndex] = category;
        }
        products[products.length] = {
            name,
            category: categories[catIndex],
            price,
            quantity,
        };
    } else {
        alert("product exist");
    }
    print();
}

function handleFilterCategory() {
    print({ category: select.value, name: filterByName.value });
}

function handleFilterName() {
    print({ category: select.value, name: filterByName.value });
}

print();
