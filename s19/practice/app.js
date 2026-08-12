// 1.
// var items = document.getElementsByTagName("li");

// for (var i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//         items[i].setAttribute("class", "text-red");
//     } else {
//         items[i].setAttribute("class", "text-green");
//     }
//     items[i].innerText = `${i + 1}. ${items[i].innerText}`;
// }

// 2.
// var image = document.getElementsByTagName("img");
// image[0].setAttribute(
//     "src",
//     "https://dkstatics-public.digikala.com/digikala-products/f8e18d30fa4f7a98b059ca9c512ec1c72880d7a7_1765288628.jpg",
// );
// image[0].setAttribute("width", "80px");
// image[0].setAttribute("height", "80px");
// image[0].setAttribute("alt", "headphone");

// 3.
// var products = [
//     {
//         name: "هندزفری",
//         image: "https://dkstatics-public.digikala.com/digikala-products/f8e18d30fa4f7a98b059ca9c512ec1c72880d7a7_1765288628.jpg",
//         price: 100,
//     },
// ];

// var card = document.getElementById("card");
// card.innerHTML = `
// <img src=${products[0].image} alt=${products[0].name} width="80px" height="80px" />
// <h4>${products[0].name}</h4>
// <span>${products[0].price}<small>تومان</small></span>
// `;

// var elements = document.getElementsByTagName("ul");
// console.log(elements);

// var items = elements[0].children;

// for (var i = 0; i < items.length; i++) {
//     if (i % 2 === 0) {
//         items[i].setAttribute("class", "text-green");
//     } else {
//         items[i].setAttribute("class", "text-red");
//     }
// }

// var p = document.getElementsByClassName("p");
// p[0].setAttribute("class", "text-red");

// var p = document.querySelectorAll(".p");
// console.log(p);
// p[1].setAttribute("class", "text-red");

// var p = document.getElementById("p1");
// console.log(p.attributes);
// p.style.color = "blue";

// var p = document.getElementsByClassName("p");
// p[0].style.color = "blue";
// p[1].style.color = "red";
// p[1].style.fontSize = "28px";

// var element = document.getElementById("my-input");
// console.log(element.value);
// element.value = "my new text";

// function handleClick(e) {
//     console.log(e);
// }

// function changeColor() {
//     var pElement = document.getElementById("p");
//     pElement.style.color = pElement.style.color === "red" ? "black" : "red";
// }

var colors = ["red", "blue", "green", "yellow", "pink", "orange"];
var box = document.getElementById("box");

var count = 0;
function changeColor() {
    if (count === colors.length) count = 0;
    box.style.backgroundColor = colors[count];
    count++;
}
