let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let num3 = +prompt("Enter the third number:");
let num4 = +prompt("Enter the fourth number:");
let num5 = +prompt("Enter the fifth number:");

let L = num1;

if (num2 > L) {
  L= num2;
}

if (num3 > L) {
  L = num3;
}

if (num4 > L) {
  L= num4;
}

if (num5 > L) {
  L = num5;
}

console.log("The largest number is " + L);
