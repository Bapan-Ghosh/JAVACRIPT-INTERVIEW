
// <1> Arguments objects are not available in arrow functions, 
// const abc = (a,b)=>{
    //       console.log(arguments)    // we will get error
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
console.log(carData)  // this is allowed means we can create constructor function using normal function



/*const Car2 = (name)=>{
    this.brand = name;
}

let carData2 = new Car2('LANDROVER');
console.log(carData2)    // this is not allowed to create object of a constructor function

*/






// <3> Arrow functions are not hoisted

// :::::::::: example    :::::::::::
/* like we can create a normal function and call the function from
   the uper from the function and lower from the function
  
   but in case of arrow function we can't do that
*/

//  <4> Arrow function do not have their own this

let userInfo = {
    name : 'code improve',
    fullName(){
        const test = ()=>{
            console.log(this.name + '===')
        }
        test();
        console.log(this.name+'normal function');
    },
    fullName2:()=>{
        console.log(this.name+'Arrow function');
    }
}

userInfo.fullName()
