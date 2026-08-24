// const nums = [1, 2, 3, 4, 5];

// function operation(array, callback, initialValue = 0) {
//     // let result = array[0];
//     let result = initialValue;
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         result = callback(result, item);
//     }
//     return result;
// }

// function sum(a, b) {
//     return a + b;
// }

// function mul(a, b) {
//     return a * b;
// }

// const sumResult = operation(nums, sum);
// console.log(sumResult);

// const mulResult = operation(nums, mul, 1);
// console.log(mulResult);

// const minusResult = operation(nums, (a, b) => a - b);
// console.log(minusResult);

// ES6 built-in methods:
// const array = [1, 2, 3];

// const res = array.push(4, 5, 6);
// console.log(res);

// array.pop();
// array.pop();

// const result = array.shift();
// array.unshift(-2, -1, 0);
// console.log(array);

// const nums = [1, 2, 3, 4, 5];
// const fruits = ["orange", "apple", "pineapple", "strawberry"];
// const users = [
//     { name: "nima", age: 20 },
//     { name: "pouya", age: 22 },
//     { name: "maryam", age: 18 },
// ];

// function find(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         const res = callback(item);
//         if (res === true) return item;
//     }
// }

// function gtTwo(item) {
//     return item > 2 ? true : false;
// }

// console.log(find(nums, gtTwo));
// console.log(
//     find(fruits, (item) => {
//         if (item === "apple1") return true;
//         return false;
//     }),
// );

// const foundUser = find(users, (user) => {
//     if (user.name === "pouya") return true;
//     return false;
// });
// console.log(foundUser.age);

// const nums = [1, 2, 3, 4, 5];

// const fruits = ["orange", "apple", "pineapple", "strawberry"];
// const users = [
//     { name: "nima", age: 20, birthdate: "14050602" },
//     { name: "pouya", age: 22, birthdate: "14050702" },
//     { name: "maryam", age: 18, birthdate: "14051002" },
// ];

// const a = nums.find((item) => item > 3);
// console.log(a);

// console.log(fruits.find((a) => a === "apple"));

// const user = users.find((a) => a.name === "amir")?.age;
// console.log(user);

// const user = users.find((u) => u.birthdate === "14050602");
// if (user) {
//     console.log(`happy birth day ${user.name}`);
// }

// const result = fruits.some((t) => t === "apple1");
// console.log(result);

// console.log(users.some((u) => u.name === "maryam"));

// console.log(
//     "even",
//     nums.some((n) => n % 2 === 0),
// );

// const isAllow = users.every((u) => u.age >= 18);
// if (isAllow) console.log("Allowwwwww");

const fruits = ["orange", "apple", "pineapple", "strawberry"];
// fruits.sort();
// console.log(fruits);

// const nums = [100, 20, 200, 30]; //20,30,100,200
// nums.sort((a, b) => a - b);
// console.log(nums);

/**
 * [20, 100, 200, 30]
 * [20, 100, 200, 30]
 * [20, 100, 30, 200]
 * [20, 30, 100, 200]
 * [20, 30, 100, 200]
 * [20, 30, 100, 200]
 */
// console.log(fruits.includes("appleflmvdm"));

// const users = [
//     { name: "nima", age: 20, birthdate: "14050602" },
//     { name: "pouya", age: 22, birthdate: "14050702" },
//     { name: "maryam", age: 18, birthdate: "14051002" },
// ];

// // warning: dont use includes for objects
// console.log(users.includes({ name: "pouya", age: 22, birthdate: "14050702" }));

const nums = [2, 3, 4, 5, 6];
// console.log(nums.slice(2, 5));

// const newNums = [];
// for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     newNums.push(element * 2);
// }

// console.log(newNums);

// const newArray = nums.map((item) => item * 2);
// console.log(newArray);

const newArray = nums.map((item) => {
    return `item-${item}`;
});
console.log(newArray);
