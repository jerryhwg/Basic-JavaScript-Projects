function Car(make, model) {  
// function defined
    this.make = make;  
    this.model = model;
    // constructor, the value of this will become the new object when a new object is created
    document.write(this.make + " : " + this.model);
    // access those object properties
};

var myCar1 = new Car("Ford", "Mustang");  
var myCar2 = new Car("Ford", "F150");
// instantiate an object; create an object by calling the constructor function with the new keyword