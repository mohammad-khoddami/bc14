getAllProducts();
async function getAllProducts() {
    try {
        // const response = await fetch("https://dummyjson.com/products");
        const response = await fetch(
            "https://api.digikala.com/discovery/api/v1/product-tags/iphone-16/products?_rch=d36f45eef550&page=1",
        );
        const result = await response.json();
        // print(result.products);
        print(result.data.products);
    } catch (error) {
        console.log("Error");
    }
}

function print(productList) {
    const productDiv = document.getElementById("product-list");

    const cards = productList.map((product) => {
        return `<div class="card">
            <img src="${product.images.main.url[0]}" alt="${product.title_fa}" width="100px" height="100px"/>
            <p>${product.title_fa}</p>
        </div>`;
    });
    // const cards = productList.map((product) => {
    //     return `<div class="card">
    //         <img src="${product.images[0]}" alt="${product.title}" width="100px" height="100px"/>
    //         <p>${product.title}</p>
    //     </div>`;
    // });

    productDiv.innerHTML = cards.join("");
}
