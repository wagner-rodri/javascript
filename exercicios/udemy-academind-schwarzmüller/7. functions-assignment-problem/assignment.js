function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Re-write the function you find in <code>assignment.js</code> as an arrow
// function.

const sayHello2 = name => console.log('Hi ' + name);

sayHello2('Wagner');

// Adjust the arrow function you created as part of task 1 to use three
// different syntaxes: With two arguments (incl. a phrase that replaces "Hi"),
// with no arguments (hard-coded values in function body) and with one returned value (instead of outputting
// text inside of the function directly).

// #1
const sayHello3 = (salute, name) => console.log(salute + name);

sayHello3('Hello, ', 'Wagner!');

// #2

const sayHello4 = () => {
  const salute = 'Hello, ';
  const name = 'Wagner!';
  console.log(salute + name)
}

sayHello4()

// #3
const sayHello5 = (salute, name) => salute + name;

console.log(sayHello5('Hello, ', 'Wagner!'))


// Add a default argument to the function you created: A fallback value for
// the phrase if no value is provided.

const sayHello6 = (salute, name = 'Person!') => salute + name;

console.log(sayHello6('Hello, '))


// Add a new function: "checkInput" which takes an unlimited amount of
// arguments (unlimited amount of strings) and executes a callback function
// if NO argument/ string is an empty string.

function checkInput (cb, ...exercise) {
  let hasEmptyValues = false;
  for (const arg of exercise) {
    if (!arg) {
      hasEmptyValues = true;
      break;
    }
  }
  if (!hasEmptyValues) {
    cb ();
  }
  
}

checkInput(
  () => {
  console.log('All not empty');
  },
   'hello', 'sdv', '12')