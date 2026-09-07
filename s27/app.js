// const text = "this is javascript. I Love Javascript.";
// console.log(text.slice(0, 10) + "...");
// console.log(text.trim());
// const sports = ["swim", "vollybal", "soccer"];
// const sportStr = sports.join("&");
// console.log(sportStr);
// console.log(sportStr.split("&"));

// const newText = text.toLowerCase().split(" ");
// console.log(newText);

// const name = "Houman";
// console.log(`${name} `.repeat(3));

// const text1 = "This is a";
// console.log(text1.padStart(20, "*"));

// Regular Expression(RegEx)
// const text = "this is javascript. I, Love 5 Javascript. Do 12 you Like Js?";
// const newText = text.replaceAll("javascript", "js");
// const newText = text.replace(/\s/g, "*");
// console.log(newText);

// const userName = "alex_74";
// const password = "abcABC123";
// const res = password.search(/[.]/g);
// console.log(res);

// const user = [
//     {
//         name: "behnam",
//         age: 42,
//         job: "dev",
//     },
//     {
//         name: "behnam1",
//         age: 30,
//         job: "dev1",
//     },
//     {
//         name: "behnam2",
//         age: 20,
//         job: "dev2",
//     },
// ];

// const userKeys = Object.keys(user);

/**
 * behnam1, age1, job1
 * behnam2, age2, job2
 */

// const userKeys = Object.keys(user[0]);
// const userValues = Object.values(user[0]);
// const hasJobProps = Object.hasOwn(user[0], "hasHome");

// console.log(hasJobProps);
// console.log(userValues);
// user.forEach((u) => {
//     userKeys.forEach((k) => {
//         console.log(`${u[k]},`);
//     });
// });
// console.log(userKeys);

// const user = {
//     name: "ali",
//     age: 25,
//     job: "dev",
// };
// const user2 = user;
// user2.name = "nima";
// console.log(user);

// const fruits = ["apple", "graps"];
// const fruits2 = fruits;
// fruits2.push("peach");
// console.log(fruits);

// let userName = "ali";
// userName2 = userName;
// userName = "nima";
// console.log(userName2);

/**
 * Values in js: primitive Value or none-primitive value
 */

// const user = {
//     name: "ali",
//     age: 25,
//     job: "dev",
// };

// const user2 = user; // shallow copy

// deep copy:
// const user2 = Object.assign({}, user);
// user.name = "nima";
// console.log(user);
// console.log(user2);

// deep compy:
// const user2 = { ...user }; //... -> rest or spread
// user.name = "nima";
// console.log(user);
// console.log(user2);

// const address = {
//     country: "iran",
//     city: "tehran",
//     street: "azadi",
// };

// const user2 = {
//     ...user,
//     ...address,
// };
// console.log(user2);

// const user2 = {
//     ...user,
//     name: "nima",
// };
// console.log(user);
// console.log(user2);

// const fruits = ["apple", "mango", "peach"];
// const fruits2 = [...fruits, "banana"];
// console.log(fruits);
// console.log(fruits2);

// const users = [
//     { name: "amir", age: 12 },
//     { name: "sima", age: 18 },
// ];
// const newUsers = [...users, { name: "ali", age: 27 }];
// console.log(newUsers);

const txt = "    Hello,  hello    JS! js,   is great. js";
let newTxt = txt.trim().toLowerCase();
newTxt = newTxt.replace(/[,!.]/g, "");
newTxt = newTxt.replace(/\s+/g, " ");
const arrTxt = newTxt.split(" ");

var res = {};
arrTxt.forEach((i) => {
    if (res[i]) res[i]++;
    else res[i] = 1;
});

console.log(res);
