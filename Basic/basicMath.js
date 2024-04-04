// this will include all the math functions

let profileAge = 90;
let profileMoney = 90.3773;

console.log(typeof(profileAge));

// coverting floating point numbers to two decimal places 

let lostofDecimals = 90.836648673826773;

let twodecimals = lostofDecimals.toFixed(3);
console.log(typeof(twodecimals));


let age = "90";

let answer = Number(age) + 4;
console.log(answer);

let firstAge = 90;
let secondAge = 89;

console.log(firstAge + secondAge);
console.log(firstAge * secondAge);
console.log(firstAge - secondAge);
console.log(firstAge / secondAge);
console.log(firstAge % secondAge);
console.log(firstAge**secondAge);