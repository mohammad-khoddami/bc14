// var number = 16;

// if (number % 2 === 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }

// var weekDay = 0;
// switch (weekDay) {
//     case 3:
//     case 4:
//         console.log("soooon weekend");
//         break;
//     case 5:
//     case 6:
//         console.log("weekend");
//         break;
//     default:
//         console.log("looking for weekend");
// }

// var status = "success"; //success, error, warning
// switch (status) {
//     case "success":
//         console.log("green");
//         break;
//     case "error":
//         console.log("red");
//         break;
//     case "warning":
//         console.log("yello");
//         break;
//     default:
//         break;
// }

// var cart = [
//     { name: "chips", price: 3 },
//     { name: "ice cream", price: 2 },
//     { name: "cake", price: 5 },
//     { name: "cake 2", price: 7 },
//     { name: "cake 3", price: 3 },
//     { name: "cake 4", price: 4 },
//     { name: "cake 4", price: 4 },
// ];

// var sumPrice = cart[0].price + cart[1].price + cart[2].price + cart[3].price + cart[4].price;

// if (sumPrice >= 10) {
//     console.log("discount");
// } else {
//     console.log("no discount");
// }

// Loop:
// iteration -> پیمایش

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var students = ["bita", "farhad", "ali", "parsa", "nafiseh"];
// for (var i = 0; i < 5; i++) {
//     console.log(students[0]);
// }

// var arr = [5, 4, 3, 7, 2];

// var sum = 0;
// for (var i = 0; i < 5; i++) {
//     sum = sum + arr[i];
// }
// console.log(sum);

// var arr = [5, 10, 8, 7, 2, 14, 32, 56];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// var cart = [
//     { name: "chips", price: 3 },
//     { name: "ice cream", price: 2 },
//     { name: "cake", price: 5 },
//     { name: "cake 2", price: 7 },
//     { name: "cake 3", price: 3 },
//     { name: "cake 4", price: 4 },
//     { name: "cake 4", price: 4 },
// ];

// var sum = 0;
// for (var i = 0; i < cart.length; i++) {
//     sum += cart[i].price;
// }
// console.log(sum);

// While loop:

// var i = 0;
// while (i < 0) {
//     console.log(i);
//     i++;
// }

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 0);

/**
 * آرایه از اعداد داریم. بزرگترین عدد زوج و کوچکترین عدد فرد چاپ شود
 *
 * آرایه ای از اعداد داریم. هرعدد چندبار تکرار شده است
 * [2, 10, 5, 2, 3]
 * 2 -> 2
 * 10 -> 1
 * 5 -> 1
 * 3 -> 1
 */

// Function:
// Dry -> dont repeat your self

// var cartUser1 = [
//     { name: "chips", price: 3 },
//     { name: "ice cream", price: 2 },
// ];
// var sumUser1 = 0;
// for (var i = 0; i < cartUser1.length; i++) {
//     sumUser1 += cartUser1[i].price;
// }
// console.log(sumUser1);

// var cartUser2 = [
//     { name: "chips", price: 3 },
//     { name: "cake", price: 5 },
// ];
// var sumUser2 = 0;
// for (var i = 0; i < cartUser2.length; i++) {
//     sumUser2 += cartUser2[i].price;
// }
// console.log(sumUser2);

// var cartUser3 = [
//     { name: "cake 2", price: 7 },
//     { name: "cake 3", price: 3 },
//     { name: "cake 4", price: 4 },
// ];
// var sumUser1 = 0;
// for (var i = 0; i < cartUser1.length; i++) {
//     sumUser1 += cartUser1[i].price;
// }
// console.log(sumUser1);

function print(a, b) {
    var sum = a + b;
    return sum;
}

//print(); //call, invoke

var result = print(3, 4);
console.log(result);
