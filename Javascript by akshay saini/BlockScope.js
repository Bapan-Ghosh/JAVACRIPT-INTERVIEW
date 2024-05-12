let A = 10;
var B = 20;

{
    let A = 100;
    var B = 200;
    console.log(A);            // 100
    console.log(B);            // 200
}

console.log(A);               // 10   because of the blocked scope
console.log(B); // This will be updated to 200

// This is called shadowing

/*
var: Variables declared with var are function-scoped.
     This means they are only available within the function in which they are 
     declared, and they are not bound to block-level scope.

let: Variables declared with let are block-scoped. They are limited to the block, 
     statement, or expression where they are defined, which includes loops, if 
     statements, and other similar blocks.
     
    :: javascript Copy code ::

function exampleScope() {
  if (true) {
    var x = 10; // function-scoped
    let y = 20; // block-scoped
  }

  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
}

Hoisting:
var: Variables declared with var are hoisted to the top of their function or 
     global scope. This means you can use the variable before it's declared in
     the code, but the value assigned to it won't be hoisted.



console.log(a); // undefined
var a = 5;
console.log(a); // 5
  let: Variables declared with let are also hoisted, but they are not initialized. 
       Accessing the variable before the declaration results in a ReferenceError.

javascript
Copy code
console.log(b); // ReferenceError: b is not defined
let b = 10;
console.log(b); // 10

Redeclaration:
var: You can redeclare a variable using var within the same scope without any 
     errors.

javascript
Copy code
var x = 5;
var x = 10; // No error
console.log(x); // 10

let: Attempting to redeclare a variable using let within the same block or scope 
    will result in a SyntaxError.
javascript
Copy code
let y = 15;
let y = 30; // SyntaxError: Identifier 'y' has already been declared
console.log(y);
Global Object Property:
var: Variables declared with var become properties of the global object 
     (e.g., window in a browser environment).

     javascript
     Copy code
var globalVar = 50;
console.log(window.globalVar); // 50 (in a browser environment)

let: Variables declared with let do not become properties of the global object.
javascript
Copy code
let globalLet = 100;
console.log(window.globalLet); // undefined (in a browser environment)

*/

// ******Lexcical environment is the local memory along with the lexical 
//       environment of it's parents