//console.log(b)  // because this is behaving like a variable
// b() :: This will give us an error like b() is not a function 

var b = function () {
    console.log("b is called ");
}

b()


// corner case  :: function expression

var x = function xyz() {
console.log("x is called");
}


// Arguments and parameters

var kk = function(parameter1 , parameter2){
    console.log(parameter1 , parameter2);
}


let argument1 = 12, argument2 = 45;
kk(argument1, argument2);

//first class function
// passing a function as an arguments is known as first class function

var fn = (x)=>{
    x();
}

fn(()=>{
    console.log("passing it calling it");
})