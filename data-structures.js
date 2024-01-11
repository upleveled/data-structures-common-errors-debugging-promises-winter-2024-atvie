// == Boolean ==
const bool = true;
const bool2 = false;
const bool3 = 3 < 5;

// == Undefined ==
const und = undefined; // literal

// Not assigned
let unassigned;
console.log(unassigned);

// Return value from function without return keyword
function doesntReturnAnything() {}
const returnValue = doesntReturnAnything();
console.log(returnValue);

// == Null ==
// null represents the absence of a value
const nullValue = null; // literal

// == String ==
const name1 = 'karl'; // single quote string
const accessory = "karl's gold chain"; // double quote string
// const accessory = 'karl\'s gold chain'; // escaped single
// quote within single quote string
const multilineString = `
I can write multiple lines here
and also interpolate other values like ${name1}
`;

// Concatenation
const firstName = 'karl';
const lastName = 'horky';
const fullName = firstName + ' ' + lastName;

// Convert something to a string
const numberToConvert = 123;
const stringConvertedFromNumber = String(numberToConvert);
console.log('numberToConvert', numberToConvert);
console.log('stringConvertedFromNumber', stringConvertedFromNumber);

// == Number ==
const num1 = 10;
const num2 = 35;

const result1 = 0.1 + 0.1;
console.log('result1', result1);
const result2 = 0.1 + 0.2;
console.log('result2', result2); // 0.30000000000000004
// if you need to do math, don't use floating points (numbers with decimals)

// Convert something to a number
const stringToConvert = '456';
const numberConvertedFromString = Number(stringToConvert);
console.log('stringToConvert', stringToConvert);
console.log('numberConvertedFromString', numberConvertedFromString);

// == Object ==
const userExample = {
  id: 42,
  name: 'roger',
  age: 482,
  favoriteRestaurant: {
    name: "jerry's pizzeria",
    address: '123 jerry boulevard',
  },
};

console.log('userExample', userExample);

// Access property in object
console.log('userExample.name', userExample.name); // dot notation
console.log('userExample.name', userExample['name']); // square brackets notation

// Access property in nested object
console.log(
  'userExample.favoriteRestaurant.address',
  userExample.favoriteRestaurant.address,
);

// Access dynamic key in object
let key = 'age';
console.log('userExample[key] (age)', userExample[key]);
key = 'id';
console.log('userExample[key] (id)', userExample[key]);

// Reassigning object property ("mutating")
userExample.age = 483;
console.log('userExample.age reassigned', userExample.age);

// Add new property to object
userExample.city = 'Vienna';
console.log('userExample with new city property', userExample);

// == Array ==
const numbers = [1, 2, 3]; // array of numbers

// Add an item to the array
numbers.push(4);

const strings = ['a', 'b', 'c']; // array of strings

// Array of objects
const users = [
  {
    id: 42,
    name: 'roger',
    age: 482,
  },
  {
    id: 43,
    name: 'susan',
    age: 31,
  },
];
// Access array item with index
console.log('users[0]', users[0]);
// Access array item with .find method
const userWithId43 = users.find(
  // "user" is the current object in the array above, in the loop
  (user) => {
    return user.id === 43;
  },
);
console.log('userWithId43', userWithId43);

// == Function ==

// Function without return value
function doesntReturnAnything2() {}
console.log('doesntReturnAnything2()', doesntReturnAnything2());

// Function returning a number
function returnsNumber() {
  return 1;
}
console.log('returnsNumber()', returnsNumber());

// Function accepts 2 parameters
function sum(a, b) {
  return a + b;
}
console.log('sum', sum(1, 2));
console.log('sum', sum(4, 5));

const num3 = 10;
const num4 = 35;

console.log('sum', sum(num3, num4));

// Create an arrow function
const sum2 = (a, b) => {
  return a + b;
};

// Create an arrow function with concise body
const sum3 = (a, b) => a + b;

console.log(
  'map',
  [1, 2, 3].map((num) => num * 2),
);

// == Symbol ==
const mySymbol = Symbol('my symbol');
console.log('mySymbol', mySymbol);
