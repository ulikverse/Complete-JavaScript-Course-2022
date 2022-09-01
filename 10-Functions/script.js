'use strict';

/*

//// Default Parameters
//// Default Parameters
//// Default Parameters


const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*

//// How Passing Arguments Works: Value vs. Reference
//// How Passing Arguments Works: Value vs. Reference
//// How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 3291821039,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3291821039) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing ..
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/*

//// Functions Accepting Callback Functions
//// Functions Accepting Callback Functions
//// Functions Accepting Callback Functions


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS uses callback all the time

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*

//// Functions Returning Functions
//// Functions Returning Functions
//// Functions Returning Functions


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// CHallenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
*/

/*
//// The call and apply Methods
//// The call and apply Methods
//// The call and apply Methods


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//// The bind Method
//// The bind Method
//// The bind Method

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge

const addtaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addtaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/*

Coding Challenge #1 

Let's build a simple poll app! 

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below. 

Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things: 
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: 
    What is your favourite programming language? 
    0: JavaScript 
    1: Python 
    2: Rust 
    3: C++ 
    (Write option number) 
  1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 
  1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".  

4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation? 
 
 
The Complete JavaScript Course 21 
Test data for bonus:  
§ Data 1: [5, 2, 3] 
§ Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section 😉 
 
GOOD LUCK 😀

*/

/*
//// Coding Challenge #1
//// Coding Challenge #1
//// Coding Challenge #1
//// Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    // Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n('Write option number')`
      )
    );
    console.log(answer);

    // Update (Register) the answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });
*/

/*
//// Immediately Invoked Function Expressions (IIFE)
//// Immediately Invoked Function Expressions (IIFE)
//// Immediately Invoked Function Expressions (IIFE)
//// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFRE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

*/

/*
//// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

/*
//// More Closure Examples
//// More Closure Examples
//// More Closure Examples
//// More Closure Examples

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPasengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds.`);
};

const perGroup = 1000;
boardPasengers(180, 3);

*/

/*

//// Closures
//// Closures
//// Closures
//// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

*/

// Example 1

/*
let f = 0;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(g);

// Re-assigning the f function
h();
f();
console.dir(f);

// Example 2
const boardPasengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers `);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

// const perGroup = 1000;
boardPasengers(180, 3);
*/

////

/*
Coding Challenge #2 

This is more of a thinking challenge than a coding challenge 🤓 

Your tasks: 

1. Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 

2. And now explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example. 

GOOD LUCK 😀 

*/

/*

//// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
