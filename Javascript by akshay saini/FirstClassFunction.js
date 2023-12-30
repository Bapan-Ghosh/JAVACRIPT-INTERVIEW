/* In JavaScript, functions are first-class citizens, which means they can be
   treated like any other variable. Here are some characteristics of first-class
   functions in JavaScript:

Assigning to a Variable:
You can assign a function to a variable.

javascript
Copy code
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};
Passing as a Parameter:
Functions can be passed as an arguments to other functions.

javascript
Copy code
function sayHello(greetingFunction, name) {
  greetingFunction(name);
}

sayHello(greet, "John");


Returning from a Function:
Functions can be returned from other functions.

javascript
Copy code
function createGreeter() {
  return function(name) {
    console.log(`Greetings, ${name}!`);
  };
}

const myGreeter = createGreeter();
myGreeter("Alice");


Taken from gpt
*/  


//function statement
function a(){
  console.log("a");
}

// Function Expression
const abc = function (){
  console.log("Cool ")
}

// difference between function statement and function expression is different
// hoisting behaviour 


// Named function expression
var b = function xyz(){
  console.log("BBBBB");
} 
b();

xyz() // this will give us an error