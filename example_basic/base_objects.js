/* 
* Objects and properties
*/

// Object liternal
var john = {
    firstName: 'John',  // key value pair
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);

// john: ojbects
// sub items: properties

// how to access objects
console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried' = true;
console.log(john);

// Another way: new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);