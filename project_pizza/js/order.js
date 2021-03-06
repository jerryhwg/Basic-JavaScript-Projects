function getInvoice() {
    var text1 = "";
    var text2 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
        text2 = text2+sizeTotal+"<br>";
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
        text2 = text2+sizeTotal+"<br>";
    }
    runningTotal= sizeTotal;
    getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
    var runningTotal = runningTotal;
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j = 0; j < selectedMeat.length; j++) {
        text1 = text1+selectedMeat[j]+"<br>";
        if (meatCount <= 1) {
            text2 = text2 + 0 + "<br>";
            meatCount = meatCount - 1;
        } else if (meatCount == 2) {
            text2 = text2 + 1 + "<br>";
            meatCount = meatCount - 1;
        } else {
            text2 = text2 + 1 + "br";
            meatCount = meatCount - 1;
        }
    }
    getVeggie(runningTotal,text1,text2);
};

function getVeggie(runningTotal,text1,text2) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount >= 2) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for (var j = 0; j < selectedVeggie.length; j++) {
        text1 = text1+selectedVeggie[j]+"<br>";
        if (veggieCount <=1) {
            text2 = text2 + 0 + "<br>";
            veggieCount = veggieCount - 1;
        } else if (veggieCount == 2) {
            text2 = text2 + 1 + "<br>";
            veggieCount = veggieCount -1;
        } else {
            text2 = text2 + 1 + "<br>";
            veggieCount = veggieCount -1 ;
        }
    }
    getCrust(runningTotal,text1,text2);
};

function getCrust(runningTotal,text1,text2) {
    var crustTotal = 0;
    var selectedCrust;
    var crustArray = document.getElementsByClassName("crust");
    for (var j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
            text1 = text1 + selectedCrust + "<br>";
        }
        if (selectedCrust === "Cheese Stuffed Crust") {
            crustTotal = 3;
        }
    }
    runningTotal = (runningTotal + crustTotal);
    text2 = text2 + crustTotal + "<br>";
    getSauce(runningTotal,text1,text2)
};

function getSauce(runningTotal,text1,text2) {
    var sauceArray = document.getElementsByClassName("sauce");
    for (var j = 0; j < sauceArray.length; j++) {
        if (sauceArray[j].checked) {
            selectedSauce = sauceArray[j].value;
            text1 = text1 + selectedSauce + "<br>";
        }
    }
    text2 = text2 + 0 + "<br>";
    getCheese(runningTotal,text1,text2);
};

function getCheese(runningTotal,text1,text2) {
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
    text1 = text1+selectedCheese+"<br>";
    text2 = text2+cheeseTotal+"<br>";
    runningTotal = (runningTotal + cheeseTotal);

    // This code block will add dynamic contents to the order.html page by javascript
    // style.opacity=1 will present the invoice pane
    // showText will present what size of pizza and selections
    // Total will present the total price
    document.getElementById("cart").style.opacity=1;
    document.getElementById("showText1").innerHTML="<br><strong>Order Item</strong><br>"+text1+"<br>";
    document.getElementById("showText2").innerHTML="<br><strong>Sub Total $</strong><br>"+text2+"<br>";
    document.getElementById("Total").innerHTML = "<h3>Total Price: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

// This code clears the menu selections and the invoice pane and prepare for a new start
// reset() will uncheck all selected options
// style.opacity=0 will disppear the invoice pane
function Clear() {
    document.getElementById("menu").reset();
    document.getElementById("cart").style.opacity=0;
};