// <1> Arguments objects are not available in arrow functions, 
// const abc = (a,b)=>{
    //       console.log(arguments)    // we will get an error
    //       return a+b;
    // } 
 
function abc (a,b){
      console.log(arguments)
      return a+b;
}
    
console.log(abc(4,70));
    
    
// <2> We can not create constructors from arrow functions

function Car(name){
    this.brand = name;
}

let carData = new Car('LANDROVER');
console.log(carData.brand)  // this is allowed means we can create constructor
                           //  function using normal function



/* const Car2 = (name)=>{
    this.brand = name;
}

let carData2 = new Car2('LANDROVER');
console.log(carData2)    // this is not allowed to create object of a 
                            constructor function
*/


// <3> Arrow functions are not hoisted

// :::::::::: example    :::::::::::
/* like we can create a normal function and call the function from
   the uper from the function and lower from the function
  
   but in case of arrow function we can't do that
*/
//  <4> Arrow function do not have their own this

let user = { 
    name: "GFG",
    gfg1:() => {
        console.log("hello " + this.name); // no 'this' binding here
    },
    gfg2:function(){    
        console.log("Welcome to " + this.name); // 'this' binding works here
    }
};
user.gfg1(); // hello
user.gfg2(); // Welcome to GFG



// gfg is the best for this

// https://www.geeksforgeeks.org/difference-between-regular-functions-and-arrow-functions/