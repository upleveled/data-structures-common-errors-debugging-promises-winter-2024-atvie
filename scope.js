// Function scope
function sum(a, b) {
  console.log(result); // ReferenceError: Cannot access 'result' before initialization
  console.log(result2); // This works because of hoisting

  const result = a + b;
  var result2 = a + b;

  console.log(a); // Function parameter can be accessed inside of function body
  console.log(result); // Constant variable in function can be accessed inside function body

  return result;
}

sum(1, 2);

// Function parameter cannot be accessed inside of function body
console.log(a); // ReferenceError: a is not defined

console.log(result2);

// Block scope
const user = { age: 42 };

let num3;

if (user.age > 20) {
  const num = 100;
  console.log(num); // Access within if block is allowed

  var num2 = 100;
  num3 = 100; // reassign let variable
}

console.log(num); // Access outside of if block is not allowed
console.log(num2); // Access to var variable outside of if block is allowed (but don't use this)
console.log(num3); // Access to let variable outside of if block is allowed
