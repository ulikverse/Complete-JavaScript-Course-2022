"use strict";
/* 
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;
*/

/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
LECTURE: Functions 

1. Write a function called 'describeCountry' which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki' 

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console


function describeCountry(country, population, capitalCity) {
  return `${country} has a ${population} million people and its capital city is ${capitalCity}`;
}

const logUkr = describeCountry("Ukraine", 42000000, "Kyiv");
const logPol = describeCountry("Poland", 38000000, "Warszaw");
const logEng = describeCountry("England", 55000000, "London");

console.log(logUkr, logPol, logEng);

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
LECTURE: Function Declarations vs. Expressions 

1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of the world population 
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100 
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console 
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations) 


// function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const popUkr = percentageOfWorld1(45);
const popPol = percentageOfWorld1(38);
const popChi = percentageOfWorld1(1441);
console.log(popUkr, popPol, popChi);

const popUkra = percentageOfWorld2(45);
const popPola = percentageOfWorld2(38);
const popChin = percentageOfWorld2(1441);
console.log(popUkra, popPola, popChin);

// Arrow function
const caclAge3 = (birthYear) => 2037 - birthYear;
const age3 = caclAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/*
LECTURE: Arrow Functions

1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

// Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// Arrow function
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const popUkr = percentageOfWorld1(45);
const popPol = percentageOfWorld1(38);
const popChi = percentageOfWorld1(1441);
console.log(popUkr, popPol, popChi);

const popUkra = percentageOfWorld2(45);
const popPola = percentageOfWorld2(38);
const popChin = percentageOfWorld2(1441);
console.log(popUkra, popPola, popChin);

const popUkrai = percentageOfWorld3(45);
const popPolan = percentageOfWorld3(38);
const popChina = percentageOfWorld3(1441);
console.log(popUkra, popPola, popChin);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
LECTURE: Functions Calling Other Functions 

1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.' 
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier 
3. Call 'describePopulation' with data for 3 countries of your choice

// Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld2(population);
  
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};
console.log(describePopulation("Ukraine", 42));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName}  already retired 🎊`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

*/

/*

Coding Challenge #1 

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 

Your tasks: 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)" 
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2 
5. Ignore draws this time 

Test data: 
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 

Hints: 
§ To calculate average of 3 values, add them all together and divide by 3 
§ To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉 
 
GOOD LUCK 😀

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test 1
// const scoreKoalas = calcAverage(65, 54, 49);
// const scoreDolhins = calcAverage(44, 23, 71);
// // console.log(scoreKoalas, scoreDolhins);

// Test 2
const scoreKoalas = calcAverage(23, 34, 27);
const scoreDolhins = calcAverage(85, 54, 41);
// console.log(scoreKoalas, scoreDolhins);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(
      `Dolphins wins the Trophy 🏆 (${avgDolphins} vs. ${avgKoalas})`
      );
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas wins the Trophy 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log("No team wins...");
    }
  };
  
  checkWinner(scoreDolhins, scoreKoalas);
  
  const friend1 = "Michael";
  const friend2 = "Steven";
  const friend3 = "Peter";
  
  const friends = ["Michael", "Steven", "Peter"];
  console.log(friends);
  
  const y = new Array(1991, 1984, 2008, 2020);
  
  console.log(friends[0]);
  console.log(friends[2]);
  
  console.log(friends.length);
  console.log(friends[friends.length - 1]);
  
  friends[2] = "Jay";
  console.log(friends);
  // friends = ["Bob", "Alice"];
  
  const firstName = "Jonas";
  const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
  console.log(jonas);
  console.log(jonas.length);
  
  // Exercise
  const calcAge = function (birthYear) {
    return 2037 - birthYear;
  };
  const years = [1990, 1967, 2002, 2010, 2018];
  
  const age1 = calcAge(years[0]);
  const age2 = calcAge(years[1]);
  const age3 = calcAge(years[years.length - 1]);
  console.log(age1, age2, age3);
  
  const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),
  ];
  console.log(ages);
*/

/*
LECTURE: Introduction to Arrays 

1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a 
variable called 'populations' 
2. Log to the console whether the array has 4 elements or not (true or false) 
3. Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values

const populations = [42, 37, 1402, 329];
console.log(populations.length === 4);

const percentages = [
  (populations[0] / 7900) * 100,
  (populations[1] / 7900) * 100,
  (populations[2] / 7900) * 100,
  (populations[3] / 7900) * 100,
];

console.log(percentages);

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(""); // Last
const popped = friends.pop("");
console.log(popped);
console.log(friends);

friends.shift("");
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

*/

/*
LECTURE: Basic Array Operations (Methods)

1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours' 
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array 
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array 
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D' 
5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

const neighbours = ["Poland", "Slovakia", "Hungary", "Romania", "Moldova"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours !== "Germany") {
  console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("Moldova"));

neighbours[4] = "Doomland";
console.log(neighbours);
*/

/*
Coding Challenge #2 

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. 

Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100 
2. And now let's use arrays! So create an array 'bills' containing the test data below 
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 

4. Bonus: Create an array 'total' containing the total values, so the bill + tip 

Test data: 125, 555 and 44 

Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉 
 
GOOD LUCK 😀

// 1
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Alternative way of solving using !!Arrow Function!!
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// let calccedTip1 = calcTip(100);
// console.log(calccedTip1);

const calcTip1 = calcTip(125);
const calcTip2 = calcTip(555);
const calcTip3 = calcTip(44);

// 2
const bills = [125, 555, 44];

// 3
const tips = [calcTip1, calcTip2, calcTip3];
// Alternative way:
// const tips = [calcTip(bills[0], calcTip(bills[1], calcTip(bills[2])]
console.log(bills, tips);

// 4 BONUS
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// let bill = 275;
// let tip = bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

// console.log(
  //   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
  // );
  
  const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
  };
  */

/*
LECTURE: Introduction to Objects 

1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)  

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "Ukrainian",
  population: 42000000,
  neighbours: [
    "Poland",
    "Slovakia",
    "Hungary",
    "Romania",
    "Moldova",
    "Orks",
    "Semi-Orks",
  ],
};

*/

/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."last" + nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friens"
  );
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log(
      "Wrong request! Choose between firstName, lastName, age, job, and friens"
      );
    }
    
    jonas.location = "Portugal";
    jonas["twitter"] = "@jonasschmedtmann";
    console.log(jonas);
    
    // Challenge
    // "Jonas has 3 frineds, and his best friend is called Michael!"
    
    console.log(
      `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}!`
      );
      
*/

/*
LECTURE: Dot vs. Bracket Notation 

1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.' 
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "ukrainian",
  population: 42,
  neighbours: [
    "Poland",
    "Slovakia",
    "Hungary",
    "Romania",
    "Moldova",
    "Orks",
    "Semi-Orks",
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
  );
  

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // caclAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  caclAge: function () {
    // console.log(this);
    return 2037 - this.birthYear;
  },

  caclAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.caclAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence.`;
  },
};

console.log(jonas.caclAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is 46 years old teacher, and he has a driver's license"

console.log(jonas.getSummary());

*/

/*
LECTURE: Object Methods 

1. Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword. 
2. Call the 'describe' method 
3. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.


const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "ukrainian",
  population: 42,
  neighbours: [
    "Poland",
    "Slovakia",
    "Hungary",
    "Romania",
    "Moldova",
    "Orks",
    "Semi-Orks",
  ],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

*/

/*
Coding Challenge #3 

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 

Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter) 

Your tasks: 

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith) +

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method 

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
 
GOOD LUCK 😀


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

// console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    );
  } else if (john.bmi > mark.bmi) {
    console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
      );
    }
    
*/
