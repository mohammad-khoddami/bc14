// ES6
// DX (developer experience)

// var a = 10;
// let a = 10;

/**
 * let is scope base
 */

// if (true) {
//     let a = "x";
//     console.log(a);
// }
// console.log(a);
// a = "z";
// console.log(a);

// if (true) {
//     var a = "x";
//     console.log(a);
// }
// console.log(a);
// a = "z";
// console.log(a);

// function test() {
//     var a = 10;
//     if (true) {
//         var a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// function test() {
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

/**
 * you cannot define same name variable with let.
 */

// let a = 10;
// let a = 20;
// console.log(a);

// var a = 10;
// var a = 20;
// console.log(a);

// hoisting:
// console.log(a);
// let a = 10;

// console.log(a);
// var a = 10;

// the below lines are same as previous lines
// var a;
// console.log(a);
// a = 10;

// a = 10;
// var a;
// console.log(a);

// a = 10;
// let a;
// console.log(a);

// const -> constant(متغیر ثابت) -> reassignment is not allowed
// const a = 10;
// a = 20;
// console.log(a);

// const user = {
//     name: "mohammad",
//     age: 20,
// };
// user.name = "ali";
// user.weight = 40;
// console.log(user);

// const array = [1, 2, 3];
// array[2] = 12;
// array.push(13);
// console.log(array);

/**
 * const is same as let except that const is constant
 * but in array and object const is same as let
 */

// declaration function:
// sum(2, 3);
// function sum(a, b) {
//     console.log(a + b);
// }

// expression function
// sum(2, 3);
// const sum = function (a, b) {
//     console.log(a + b);
// };

// arrow function:
// const sum = (a, b) => {
//     console.log(a + b);
// };
// const sum = (a, b) => console.log(a + b);
// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// let a = [1, 2, 3, 4, 5];
// function print(array) {
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// }
// print(a);

// const print = function (array) {
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// };
// print(a);

// const print = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         console.log(item);
//     }
// };
// print(a);

// const array = [2, 5, 16, 13, 12, 23, 52];

// function even(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (item % 2 === 0) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }
// function odd(arr) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (item % 2 !== 0) {
//             newArray.push(item);
//         }
//     }
//     return newArray;
// }

// const evenList = even(array);
// console.log(evenList);

// const oddList = odd(array);
// console.log(oddList);

// callback function:
const myArr = [2, 5, 16, 13, 12, 23, 52];

function filter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        let result = callback(item);
        if (result) newArray.push(result);
    }
    return newArray;
}

function isEven(num) {
    if (num % 2 === 0) return num;
}
function odd(number) {
    if (number % 2 !== 0) return number;
}

// function graterThanTen(number) {
//     if (number > 10) return number;
// }

const oddlist = filter(myArr, odd);
console.log(oddlist);

const evenList = filter(myArr, isEven);
console.log(evenList);

const gttList = filter(myArr, (number) => {
    if (number > 10) return number;
});
console.log(gttList);

const arr2 = [1, 2, 3, 4];
//sum: 10;
//mul: 24;
//minus: -8
