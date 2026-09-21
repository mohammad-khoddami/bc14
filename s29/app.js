// console.log("Line1");
// console.log("Line2");
// console.log("Line3");

// console.log("Line1");
// line2();
// console.log("Line3");

// function line2() {
//     for (let i = 0; i < 1_000_000_000; i++) {
//         for (let j = 0; j < 10; j++) {}
//     }
//     console.log("line2");
// }

// console.log("Line1");
// line2(() => console.log("Line3"));

// function line2(a) {
//     setTimeout(() => {
//         console.log("line2");
//         a();
//     }, 3000);
// }

/**
 * Promise: fulfill(resolve) / reject
 */
// const response = fetch(
//     "https://api.digikala.com/discovery/api/v1/product-tags/iphone-16/products?_rch=d36f45eef550&page=1",
// );
// .then((res) => {
//     console.log("Result is Success");
//     console.log(res);
// })
// .catch((err) => console.log("Error Happened"))
// .finally(() => {
//     console.log("Fiiiiiiinnnnnnaaaly");
// });

// console.log("Hello");
// console.log(response);

// fetch("https://dummyjson.com/products")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

async function getProduct() {
    try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.log("Errrrrrrrrrrror");
    }
}

getProduct();
