//[statement] ? [code when true] : [code when false]
function myFunction() {
    var status;
    var age = 19;
    status = age > 18 ? "adult" : "minor";
    console.log(status);
}
myFunction()