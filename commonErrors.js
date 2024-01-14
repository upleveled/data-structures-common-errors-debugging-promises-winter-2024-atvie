// 1. ReferenceError: variable is not defined
variable = 1;
console.log(variable);

// Common reasons for this include
// a. you forgot to declare a variable
// b. you forgot to import from a package

// 2. TypeError: x is not a function
const x = 3;
console.log(x());

// 3. TypeError: Cannot read properties of undefined (reading 'b')
let a;
console.log(a.b);
const a2 = undefined;
console.log(a2.b);

const a3 = {
  x: 1,
};
console.log(a3.y.z);

console.log(a3.y?.z); // avoid the error with this (optional chaining)

// 4. SyntaxError: Missing initializer in const declaration
const a;

// Not as common
