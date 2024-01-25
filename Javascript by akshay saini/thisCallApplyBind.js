/*  
  In JavaScript, call, apply, and bind are three powerful methods used to
  invoke functions with specific context and arguments.

  /////////////////////////////////////////////////////////////////////////
  Whenever we call a function, by default js behind the scene uses the call 
  method. When we have a function defined inside an object, and we want to 
  reuse the function inside that object in another object, we use call bind 
  and apply.
*/

let name = {
    firstName : "Bapan",
    lastName : "Ghosh",
}

let printFullName = function(city){
    console.log(this.firstName+" "+this.lastName+" "+city)
}

printFullName.call(name,"kolkata");

let name2 = {
    firstName: "Nirmal",
    lastName: "Ghosh"
}

// function borrowing  :::::::=> we can borrow the function by using call method
printFullName.call(name2,"kolkata")


// Apply is sm as upper but we just have to pass arguments in array
//                                                 list ["Kolkata"] 

printFullName.apply(name2,["kolkata"])

// bind method
//let printMyName = printFullName.bind(name2,"Kolkata"); // this will bind a fn
//printMyName(); // this is just calling the fn

                                   /* OR */

let printMyName =   printFullName.bind(name2);
printMyName("London")
printMyName("Sikim")
printMyName("Darjeeling")