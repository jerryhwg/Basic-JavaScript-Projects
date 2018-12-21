/* Function
*
*/

// Example 1
function calcAge(birthYear) {  // birthYear: argument
    return 2018 - birthYear;
}

var ageJohn = calcAge(1990);  // var: store the return value
console.log(ageJohn);

// Example 2
funciton yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstname + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');