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


const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const avgKoalas = calcAverage(23, 34, 27);
const avgDolhins = calcAverage(85, 54, 41);
// console.log(avgKoalas, avgDolhins);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas) {
    console.log(`Dolphins wins the Trophy 🏆 (${avgDolhins} vs. ${avgKoalas})`);
  } else {
    console.log(`Koalas wins the Trophy 🏆 (${avgKoalas} vs. ${avgDolhins})`);
  }
};

checkWinner(avgDolhins, avgKoalas);

*/
