// function myFunction (fristName){
//   console.log(prompt(`What's your name ?`));
//   alert(`Hello ${fristName}`)
// };
// myFunction('monir');

// ইউজারের কাছ থেকে নাম জিজ্ঞেস করা
// const userName = prompt("আপনার নাম লিখুন:");

// নামের ভিত্তিতে তাকে স্বাগত জানানো
// if (userName) {
//   alert(`স্বাগতম, ${userName}!`);
// } else {
//   alert("স্বাগতম, প্রিয় অতিথি!");
// };

// self invokeing function.........
(function (message) {
  console.log("I am self invokeing function", message);
})("hello JS");

let num = function (x, y) {
  return x * y;
};
console.log(num(2, 32));

let numbers = [5, 2, 3, 6, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});
console.log(sqNumbers);
// let sqNumber = numbers * 4;
// function newFun (number){
//   return number * number;
// };
// console.log(sqNumber);

let num2 = [54, 21, 23, 65, 98, 415, 32, 32];
let num3 = [56,32,98,21,32,87,65,65,23]; 
let num4 = [65,23,98,45,32,96,23,56,32,56];





