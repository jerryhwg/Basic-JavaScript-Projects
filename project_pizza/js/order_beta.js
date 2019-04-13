function getInvoice() {
    var text1 = "<br><h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"&nbsp; with selections of <br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal= sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1);
};

function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"&nbsp; / ";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("Total selected meat items: "+meatCount);
    console.log(meatCount+"meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getVeggie(runningTotal,text1)
};

function getVeggie(runningTotal,text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
            console.log("selected veggie item: ("+veggieArray[j].value+")");
            text1 = text1+veggieArray[j].value+"&nbsp; / ";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    console.log("Total selected veggie items: "+veggieCount);
    console.log(veggieCount+"veggie - 1 free meat = "+"$"+veggieTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getCrust(runningTotal,text1)
};

function getCrust(runningTotal,text1) {
    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
        }
        if (selectedCrust === "Cheese Stuffed Crust") {
            crustTotal = 3;
        }
    }
    text1 = text1+selectedCrust+"&nbsp; / ";
    runningTotal = (runningTotal + crustTotal);
    console.log("crust text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getSauce(runningTotal,text1)
};

function getSauce(runningTotal,text1) {
    var sauceTotal = 0;
    var selectedSauce = [];
    var sauceArray = document.getElementsByClassName("sauce");
    for (var j = 0; j < sauceArray.length; j++) {
        if (sauceArray[j].checked) {
            selectedSauce = sauceArray[j].value;
            sauceTotal = 0;
        }
    }
    text1 = text1+selectedSauce+"&nbsp; / ";
    runningTotal = (runningTotal + sauceTotal);
    console.log("sauce text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    getCheese(runningTotal,text1)
};

function getCheese(runningTotal,text1) {
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var j = 0; j < cheeseArray.length; j++) {
        if (cheeseArray[j].checked) {
            selectedCheese = cheeseArray[j].value;
        }
        if (selectedCheese === "Extra Cheese") {
            cheeseTotal = 3;
        }
    }
    text1 = text1+selectedCheese+"<br><br>";
    runningTotal = (runningTotal + cheeseTotal);
    console.log("cheese text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");

    // This code block will add dynamic contents to the order.html page by javascript
    // style.opacity=1 will present the invoice pane
    // showText will present what size of pizza and selections
    // Total will present the total price
    document.getElementById("cart").style.opacity=1;
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("Total").innerHTML = "<br><h3>Total Price: <strong>$"+runningTotal+".00"+"</strong></h3><br>";
};

// This code clears the menu selections and the invoice pane and prepare for a new start
// reset() will uncheck all selected options
// style.opacity=0 will disppear the invoice pane
function Clear() {
    document.getElementById("menu").reset();
    document.getElementById("cart").style.opacity=0;
};