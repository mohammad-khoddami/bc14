// function calculator(num1, num2, operator) {
//     if (operator === "+") return num1 + num2;
//     else if (operator === "-") return num1 - num2;
//     else if (operator === "*") return num1 * num2;
//     else if (operator === "/") return num1 / num2;

//     // switch (operator) {
//     //     case "+":
//     //         return num1 + num2;
//     //         break;
//     //     case "-":
//     //         return num1 - num2;
//     // }
// }

// console.log(calculator(5, 3, "+"));
// console.log(calculator(5, 3, "-"));
// console.log(calculator(8, 2, "/"));
// console.log(calculator(8, 2, "*"));

// var students = [
//     {
//         name: "nima",
//         score: [13, 17, 16, 18],
//     },
//     {
//         name: "farid",
//         score: [14, 20, 16, 17],
//     },
//     {
//         name: "aria",
//         score: [18, 12, 18, 20],
//     },
// ];

/**
 * nima: 14
 * farid: 18
 */

// function average(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     var avg = sum / numbers.length;
//     return avg;
// }

// function formatter(users) {
//     var text = "";
//     for (var i = 0; i < users.length; i++) {
//         text += `${users[i].name}: ${average(users[i].score)} \n`;
//     }
//     return text;
// }

// console.log(formatter(students));

// function bestStudent(users) {
//     var best = { name: "", score: null };
//     for (var i = 0; i < users.length; i++) {
//         var avg = average(users[i].score);
//         if (best.score === null || avg > best.score) {
//             best.name = users[i].name;
//             best.score = avg;
//         }
//     }
//     return best;
// }

// console.log(bestStudent(students));

/**
 * 1 * 1 = 1
 * 1 * 2 = 2
 * .
 * 10 * 10 = 100;
 *
 */

// function mul() {
//     for (var i = 1; i <= 10; i++) {
//         for (var j = 1; j <= 10; j++) {
//             console.log(`${i} * ${j} = ${i * j}`);
//         }
//     }
// }

// mul();

// var students = [
//     {
//         name: "ali",
//         course: ["HTML", "CSS", "JS"],
//     },
//     {
//         name: "nima",
//         course: ["C#", "ORM", "SQL", ".NET"],
//     },
//     {
//         name: "afshin",
//         course: ["Java", "python"],
//     },
// ];

// /**
//  * ali: html, css, js
//  * nima: c#, orm, sql, .net
//  * afshin: java, python
//  */

// for (var i = 0; i < students.length; i++) {
//     var text = "";
//     for (var j = 0; j < students[i].course.length; j++) {
//         text += `${students[i].course[j]}${j === students[i].course.length - 1 ? "" : ", "}`;
//     }
//     console.log(`${students[i].name}: ${text}`);
// }

// DOM -> Document Object Model
