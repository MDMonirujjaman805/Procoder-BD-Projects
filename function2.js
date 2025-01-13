// Arrow Function...........
let add = function (x,y){
  return x+y;
};
console.log(add(5,6));

let add2 = (x,y) => x+y;
console.log(add2(5,8));

let add3 = (x,y) => x+y;
add3(5,8);

function arrowFunc(a,b){
  return  a+b;
};
console.log(arrowFunc(5,2));

arrowFunc = (word) =>'Hello' + word ;
console.log(arrowFunc(' monir'));

hmm = (a,b) => a + b;
console.log(hmm(8,9));

jjj = (a,b) => a * b;
console.log(jjj(5,6));

arrowFunc = (x,y,z,m,t) => x/y*z-m+t;
console.log(arrowFunc(9,5,3,7,4));

// Nested Functions...............
function greet(fristName){
  console.log('hello world');
  function serit(lastName){
    console.log(fristName + lastName + ' Wellcome !');
  }
  serit('ujjaman')
};
console.log(greet('Monir'));





function otherFunction(otherPeram){
  console.log('this paragraph is other site');

  function innerFunction(innerPeram){
    console.log('this paragraph is inner site');
    console.log('Frist para = ', otherPeram);
    console.log('second para = ', innerPeram);
  }
  innerFunction('My country name is Bangladesh.');
};
otherFunction('My Name is Monirujjaman.');



