// console.log(x);  
// value of x is : undefined
/* Hoisting is the default behavior of moving all the declarations at the
   top of the scope before code execution. Basically, it gives us an advantage
   that no matter where functions and variables are declared, they are moved to
   the top of their scope regardless of whether their scope is global or local. 
   It allows us to call functions before even writing them in our code.  */

var x = 7;

function getName(){
    console.log("Namaste Javascript :");
}

console.log(getName());
// getName()
console.log(c)            // Cannot access 'c' before initialization
let c = 15;