'use strict';

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
*/

// Person.hey();

/*
// Prototypes
console.log(Person.prototype);

Person.prototype.caclAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.caclAge();
matilda.caclAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/*
Coding Challenge #1 
Your tasks: 

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h 

2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console 

3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console 

4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them 

Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h 
 
GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

// class expression
// const PersonCl = class {};

// class declaration

/*
class PersonCl {
  constructor(fullName, birthtYear) {
    this.fullName = fullName;
    this.birthtYear = birthtYear;
  }

  // Instance methods
  // Methods will be added to .prototype
  calcAge() {
    console.log(2037 - this.birthtYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthtYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
*/

/*
const jessica = new PersonCl('Jessica Davies', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();
*/
/*
const acount = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(acount.latest);

acount.latest = 50;
console.log(acount.movements);
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
// sarah.calcAge();
*/

/*
Coding Challenge #2 
Your tasks: 

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl') 

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6) 

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6) 

4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter. 

Test data: 
§ Data car 1: 'Ford' going at 120 km/h 

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*
Coding Challenge #3 
Your tasks: 

1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property) 

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo' 

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%' 

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉 

Test data: 
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% 
 
GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

/////////////////////////
/////////////////////////
//// Inheritance Between "Classes": ES6 Classes
//// Inheritance Between "Classes": ES6 Classes

/*
class PersonCl {
  constructor(fullName, birthtYear) {
    this.fullName = fullName;
    this.birthtYear = birthtYear;
  }

  // Instance methods
  // Methods will be added to .prototype
  calcAge() {
    console.log(2037 - this.birthtYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthtYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthtYear, course) {
    // Always needs to happen first!
    super(fullName, birthtYear);
    // this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course} `);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthtYear
      } years old, but as a student I feel more like ${
        2037 - this.birthtYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
//// Inheritance Between "Classes": Object.create

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course} `);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

//////////////////////////
//////////////////////////
//////////////////////////
//////////////////////////
//// Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);
