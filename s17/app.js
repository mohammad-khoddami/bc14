// var numbers = [3, 5, 4, 8, 20, 2, -21, 7, 25, 31, 19, 42];

// var min = null;
// var max = null;

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         if (max === null || numbers[i] > max) {
//             max = numbers[i];
//         }
//     } else {
//         if (min === null || numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
// }
// console.log("max", max);
// console.log("min", min);

// var count = {};

// var numbers = [5, 2, 20, 5, 1, 2, 17, 17, 2, 3];

// for (var i = 0; i < numbers.length; i++) {
//     if (count[numbers[i]]) {
//         count[numbers[i]] += 1;
//     } else {
//         count[numbers[i]] = 1;
//     }
// }
// console.log(count);

// Function = method

// function sayHello() {
//     console.log("hello");
// }

// sayHello(); //call, invoke

// void
// function sayHello(name = "amir") {
//     console.log("hello " + name);
// }

// sayHello();

// function sayHello(name) {
//     return "hello " + name;
// }

// var result = sayHello("mohammad");
// console.log(result);

// function area(width, height) {
//     return width * height;
// }
// // var result=area(2, 3);
// // console.log(result);
// console.log(area(2, 3));
// console.log(area(4, 5));
// console.log(area(6, 7));

// function max(a, b) {
//     return a > b ? a : b;
// }
// console.log(max(20, 4));

// function checkPermission(age) {
//     if (age > 18) {
//         return "young";
//     }
//     return "child";
// }

var user = {
    firstName: "mohammad",
    lastName: "khoddami",
    job: ["teacher", "dev"],
};

function fullName(obj) {
    return `${obj.firstName} ${obj.lastName}`;
    // return obj.firstName + " " + obj.lastName;
}
// console.log(fullName(user));

// function userJob(obj) {
//     var jobStr = "";
//     for (var i = 0; i < obj.job.length; i++) {
//         jobStr = jobStr + (i === 0 ? "" : " and ") + obj.job[i];
//     }
//     return `${fullName(obj)} is a ${jobStr}`;
// }
// console.log(userJob(user));

// var cartUser1 = [
//     { name: "chips", price: 3 },
//     { name: "ice cream", price: 2 },
// ];

// var cartUser2 = [
//     { name: "chips", price: 3 },
//     { name: "cake", price: 5 },
// ];

// var cartUser3 = [
//     { name: "cake 2", price: 7 },
//     { name: "cake 3", price: 3 },
//     { name: "cake 4", price: 4 },
// ];

// function sumCart(cart) {
//     var sum = 0;
//     for (var i = 0; i < cart.length; i++) {
//         sum += cart[i].price;
//     }
//     return sum;
// }

// console.log(sumCart(cartUser1));
// console.log(sumCart(cartUser2));
// console.log(sumCart(cartUser3));

// for (var i = 0; i < 10; i++) {
//     if (i === 5 || i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         break;
//     }
//     console.log(i);
// }

/**
 * calculate(num1, num2, operation); -> num1 =2, num2 = 4, operation: "+" -> return 6 -> print
 * calculate(num1, num2, operation); -> num1 =2, num2 = 4, operation: "-" -> return -2 -> print
 */

// var students = [
//     { name: "ali", score: [20, 18, 14, 15] },
//     { name: "erfan", score: [17, 19, 13, 15] },
//     { name: "erfan2", score: [14, 12, 9, 20] },
// ];
// 1. function average of each student
// 2. function get best student
