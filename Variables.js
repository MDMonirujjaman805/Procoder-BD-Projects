let fruts = 'banana';
console.log(`${fruts} is my fav,${fruts} I love to eat.`);

let name1 = "monir";
let fatherName = "khaled";
let adderess = "gazipur";
let phone = 1850847585;
console.log(`My name is ${name1},my father name is ${fatherName},my adderess is ${adderess} and my phone number is ${phone}.`);


let test =  alert(`Wellcome to JavaScript !`);

alert('Hi Monir !');


let name = prompt("What is your name?", "Monir");
alert("Hello, " + name + "!");


let adult = confirm('Are you 18 or smaller.');
if(adult ){
  alert('Baritay jaia gumao.');
}else{
  alert('Tomar jonnoi to ato aojon.');
};
console.log(adult);

// Custom Modal Example
const customAlert = (message) => {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  modal.innerHTML = `
    <p>${message}</p>
    <button onclick="this.parentElement.remove()">OK</button>
    <button onclick="this.parentElement.remove()">Cancel</button>
  `;
  document.body.appendChild(modal);
};

customAlert("This is a custom alert!");

confirm(`Are you adult ?`);

