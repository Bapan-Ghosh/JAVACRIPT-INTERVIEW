/*  A function that receives another function as a parameter or that returns a 
    new function or both is called Higher-order function */




// Example 1: Function that takes another function as an argument
function higherOrderFunction(func) {
    console.log("Executing higher order function");
    func(); // Here we're invoking the function passed as an argument
  }
  
  function myFunction() {
    console.log("Inside myFunction");
  }
  
  // Passing myFunction as an argument to higherOrderFunction
  higherOrderFunction(myFunction);
  
  // Example 2: Function that returns another function
  function createMultiplier(multiplier) {
    return function(x) {
      return x * multiplier;
    };
  }
  
  // create a function that multiplies by 2
  const double = createMultiplier(2);
  
  // create a function that multiplies by 3
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
  