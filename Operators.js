let infut = prompt("Enter a Number");
let number5 = parseInt(infut);
if(number5 % 2 === 0){
  console.log(`${number5} is even number.`);
}else{
  console.log(`${number5} is odd number.`);
};

function result(number){
  if (number >= 80 && 100 <= number){
    console.log('he is A+');
  }
  else if(number >= 70){
    console.log('he is B');
  }
  else if(number >= 60){
    console.log('he is C');
  }
  else if(number >= 50){
    console.log('he is D');
  }
  else{
    console.log('he is F');
  }
};
result(60);

let me = alert("Think you.");

let number = prompt("Enter a Number.");
if(number % 2 === 0){
  console.log(`Your Number is even.`);
}else{
  console.log(`Your Number is odd.`);
};

let number1 = alert(`Your Number is ${number}`);

let marks = 25;
let result1 = marks >= 50 ? 'pass': 'fail';
console.log(result1);

let j = 65;
let k = 33;
let f = j > k ? true : false;
console.log(f);
console.log(typeof f);

let d = j > k ? 'true' : 'false';
console.log(d);
console.log(typeof d);

let marks2 = 85;
let result3 = marks2 >= 50 ? "Pass" : "Fail";
console.log(result3);
console.log(typeof result3);