var john = { // object & properties
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42], // array
    calcTips: function() { // function
        this.tips = []; // empty array (initilization), use * this * keyword, this = john
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) // for loop
        {
            var percentage; // declare a var
            var bill = this.bills[i]; // variable for a common use expression (DRY)

            // Determine percentage based on tipping rules
            if (bill < 50) // if condition
            {
                percentage = .2;
            }
            else if (bill >= 50 && bill < 200)
            {
                percentage = .15;
            }
            else
            {
                percentage = .1;
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage; // arry filled thru loop executions
            this.finalValues = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) { // tips: parameter(argument)
    var sum = 0; // declare an initial var
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i]; // sum =+ tips[i]
    }
    return sum / tips.length;
}

john.calcTips(); // object & method
john.average = calcAverage(john.tips);
console.log(john); // list of john's properties: fullName, bills, calcTips (tips, finalValues), average