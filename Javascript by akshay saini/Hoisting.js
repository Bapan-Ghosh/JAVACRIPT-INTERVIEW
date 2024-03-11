// Notes from GFG
// Hoisting is a phenomena in javascript by which we can access variables and 
// functions even before we have initialized it.


/* Hoisting is JavaScript's default behavior of moving declarations to the top. */
var s = 20;

ok();
function ok(){
    console.log("222222220");
}

console.log("from var");

//  important 

getName();  // this will give us error "getName is not a function"
             // because it will behave same as variable, during memory creation
             // fetch getName = undefined i.e why  

var getName = function (){
     console.log("abc");
}
 
