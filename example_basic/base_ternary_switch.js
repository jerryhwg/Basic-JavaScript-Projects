/* 
* Ternary Operator and Switch Statement
*/

var firstName = 'John';
var age = 16;

// Ternary Operator
// ? = if
// : = else
// ternary for it has three operands
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// another way
var drink = age >= 18 ? 'beer' : 'junice';
console.log(drink);

// Switch Statement Example 1
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

// Switch Statement Example 2
var job = 'teacher';

switch(job) {
    case 'teacher':  // same as if
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':  // same as else if
        console.log(firstName + 'drives an uber in New York.');
        break;
    default:  // same as else
        console.log(firstName + ' does something else.');
}