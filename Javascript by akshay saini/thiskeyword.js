/*

Here's a comprehensive explanation of the this keyword in JavaScript:

What it is:

The this keyword refers to the object that is currently executing the code.
It's a dynamic keyword, meaning its value can change depending on how a function
is called. It's not a variable, so you cannot directly assign a value to it.
Common scenarios and how this behaves:

Object Methods:

When a function is called as a method of an object, this refers to that object.

const person = {
  name: "John",
  greet() {
    console.log("Hello, my name is " + this.name); // this refers to the person object
  }
};
person.greet(); // Output: Hello, my name is John

Standalone Functions:

When a function is called independently (not as a method), this refers to the
global object in non-strict mode, and undefined in strict mode.

function sayHello() {
  console.log("Hello from " + this);
}
sayHello(); // Output in non-strict mode: Hello from [object Window]

Event Handlers:

When a function is called as an event handler, this usually refers to the element
that triggered the event.

button.addEventListener("click", function() {
  console.log("This button was clicked: " + this.id);
});

Arrow Functions:

Arrow functions inherit this from their enclosing scope, not the context in which
they're called. JavaScript

const person = {
  name: "John",
  greet: () => {
    console.log("Hello from " + this); // this refers to the global object (in non-strict mode)
  }
};

person.greet(); // Output: Hello from [object Window]     */
