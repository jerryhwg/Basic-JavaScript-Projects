// Function expression = produces an immediate result
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in New York.';
        case 'designer':
            return firstName + ' does something else.';
        default:
    }
}

console.log(whatDoYouDo('teacher', 'John'));

// Function declaration
// Function statement = does not produce a result (result is undefined)
function whatDoYouDo(job, firstName) {}