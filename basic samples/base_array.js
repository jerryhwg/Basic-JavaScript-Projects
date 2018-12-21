/*
* Arrays
*/


// Initialize an array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);  // another way to create an array

console.log(names);
console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');  // push function
john.unshift('Mr.');
console.log(john);
// Result ["Mr.", "John", "Smith", 1990, "teacher", false, "blue"]

john.pop()
console.log(john);
// Result ["Mr.", "John", "Smith", 1990, "teacher", false]

john.shift();
console.log(john);
// Result ["John", "Smith", 1990, "teacher", false]

john.indexOf(1990);
