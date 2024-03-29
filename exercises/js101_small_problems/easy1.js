// Isn't it odd?
// let isOdd = num => (Math.abs(num) % 2) !== 0

// Odd Numbers
// for (let i = 1; i <= 99; i += 2) console.log(`${i}`);

// Even Numbers
// for (let number = 1; number < 100; number += 1) {
//   if (number % 2 === 1) {
//     continue;
//   }

//   console.log(number);
// }

// How Big is the Room?
// let readlineSync = require("readline-sync");
// const SQMETERS_TO_SQFEET = 10.7639;
// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);
// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);
// let areaInMeters = (length * width);
// let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);
// console.log(
//   `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
// );

//Tip Calculator
// let readlineSync = require("readline-sync");

// let bill = parseFloat(readlineSync.question("What is the bill?\n"));

// let percentage = parseFloat(
//   readlineSync.question("What is the tip percentage??\n")
// );

// let tip = bill * (percentage / 100);

// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);

// Sum or Product of Consecutive Integers
// function computeSum(targetNum) {
//   let total = 0;
//   for (let num = 1; num <= targetNum; num += 1) {
//     total += num;
//   }
//   return total;
// }
// function computeProduct(targetNum) {
//   let total = 1;
//   for (let num = 1; num <= targetNum; num += 1) {
//     total *= num;
//   }
//   return total;
// }
// let readlineSync = require("readline-sync");
// console.log("Please enter an integer greater than 0");
// let number = parseInt(readlineSync.prompt(), 10);
// console.log("Enter 's' to compute the sum, 'p' to compute the product.");
// let operation = readlineSync.prompt();
// if (operation === "s") {
//   let sum = computeSum(number);
//   console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
// } else if (operation === "p") {
//   let product = computeProduct(number);
//   console.log(
//     `The product of the integers between 1 and ${number} is ${product}.`
//   );
// } else {
//   console.log("Oops. Unknown operation.");
// }

// Short Long Short
// let shortLongShort = (str1, str2) => {
//   if (str1.length > str2.length) {
//     return `${str2}${str1}${str2}`;
//   } else {
//     return `${str1}${str2}${str1}`;
//   }
// };
// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// Leap Years (Part 1)
// let isLeapYear = year => {
//   if ((year % 4 === 0) && (year % 100 !== 0)) return true;
//   if ((year % 100 === 0) && (year % 400 === 0)) return true;
//   return false;
// };

// Leap Years (Part 2)
// function isLeapYear(year) {
//   if ((year < 1752) && (year % 4 === 0)) return true;
//   if ((year < 1752) && (year % 4 !== 0)) return false;
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// Multiples of 3 and 5 (my solution)
// let multisum = limit => {
//   let multiples = []; 
//   let factors = [3, 5]
//   factors.sort(); 
//   let smallestFactor = factors[0];
//   let largestFactor = factors[factors.length - 1];
//   if (limit < smallestFactor) return 0; 
//   if ((limit >= smallestFactor) && (limit < largestFactor)) {
//     factors = factors.filter(val => val <= limit);
//   }
//   for (factor of factors) {
//     counter = factor; 
//     multiples.push(counter); 
//     while ((counter <= limit) && ((counter + factor) <= limit)) {
//       counter += factor; 
//       multiples.push(counter); 
//     }
//   }
//   multiples.sort();
//   multiples = multiples.filter( (num, index) => num !== multiples[index - 1])
//   return multiples.reduce( (prev, current) => prev + current);
// }

// Multiples of 3 and 5 - launch school solution 
// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }

// function multisum(maxValue) {
//   let sum = 0; 

//   for (let number = 1; number <= maxValue; number += 1) {
//     if (isMultiple(number, 3) || isMultiple(number, 5)) {
//       sum += number; 
//     }
//   }
//   return number;
// }

// UTF-16 String Value 
let utf16Value = str => {
  if (str === "") return 0; 
  let counter = 0; 
  let arr = str.split("");
  arr.forEach(char => counter += char.charCodeAt());
  return counter;  
}
