/*
* Objects and Method
*/

var john = {
    firstName: 'John',  // key value pair
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        return 2018 - brithYear;
    }
};

console.log(john.calcAge(1990));  // Methods. Only Ojbect can have a method.

// Another way

var john = {
    firstName: 'John',  // key value pair
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.brithYear;  // this = current object (calcAge), so function() - 'this' keyword is very important to master
    }
};

john.calcAge();
console.log(john);

// Another example

var john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
console.log(john);