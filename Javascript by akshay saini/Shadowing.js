/* var a = 5;
function f(){
    var a = 2;
    console.log(a);  // 2
}
f()
console.log(a)   // 5*/
 // This will print 2 and 5   because var has a function scope 
 // when this fist will call it will go to a new execution context i.e 
 // a will go to glopal scope and this function will go to local
var b = 25; 

{
    var b = 40;
    console.log(b);
}

console.log(b);

// this will be in global for var;  this will not behave like function and
// print 40 40