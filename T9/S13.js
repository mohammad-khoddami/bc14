var addButton = document.getElementById("add");

function addProduct() {
  var nameInput = document.getElementById("name");
  var nameValue = nameInput.value;

  var categoryInput = document.getElementById("category");
  var categoryValue = categoryInput.value;

  var priceInput = document.getElementById("price");
  var priceValue = priceInput.value;

  var quantityInput = document.getElementById("quantity");
  var quantityValue = quantityInput.value;

  var product = {
    name: nameValue,
    category: categoryValue,
    price: priceValue,
    quantity: quantityValue,
  };
  var products = [];
  products[products.length] = product;
  var productTable = document.getElementById("producttable");
  for (var i = 0; i < products.length; i++) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = products[i].name;
    row.appendChild(nameCell);

    var categoryCell = document.createElement("td");
    categoryCell.textContent = products[i].category;
    row.appendChild(categoryCell);

    var priceCell = document.createElement("td");
    priceCell.textContent = products[i].price;
    row.appendChild(priceCell);

    var quantityCell = document.createElement("td");
    quantityCell.textContent = products[i].quantity;
    row.appendChild(quantityCell);

    var deleteCell = document.createElement("td");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    productTable.appendChild(row);
  }
}
