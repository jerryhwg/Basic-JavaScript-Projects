/*
* Loops and iteration
*/

// for loop
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;  // if type is not string, then continue, if type is string, then execute console.log
    console.log(john[i]);
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;  // if type is not string, then break, then stop
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >=0 ; i--) {
    console.log(john[i]);
} // i--: decrease
