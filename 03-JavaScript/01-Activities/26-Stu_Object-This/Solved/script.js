// `this` refers to the window
console.log(this);

// `this` refers to the window object
const helloThis = function () {
  console.log(`Inside this function, this is ${this}`);
};

// `this` refers to the child object. Will console log 20
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// `this` refers to the investment object. Will log 5750
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// Call the function helloThis to check results
helloThis();

// Call the object methods to check results
child.ageTenYears();
investor.investment.investmentGrowth();
