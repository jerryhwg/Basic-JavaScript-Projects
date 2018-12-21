var john = { // object & properties
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42], // array
    calcTips: function() { // function
        this.tips = []; // empty array (initilization), use * this * keyword
        this.finalValues = []; // empty array (initialization)

        for (var i = 0; i < this.bills.length; i++) // for loop
        {
            var percentage;
            var bill = this.bills[i]; // variable for a common use expression

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
            this.tips[i] = bill * percentage; // for loop execution
            this.finalValues = bill + bill * percentage;
        }
    }
}

john.calcTips(); // object & function(method)
console.log(john); // list of john's properties