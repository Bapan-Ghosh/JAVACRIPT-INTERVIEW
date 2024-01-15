const closure = () =>{
      var a = 20;
      const closure2 = ()=>{
        console.log(a);
      }
      return closure2;
}

closure()()
// or we can write this as
/*  
    var res = closure(); 
    res() 
               This two line basically same as the closure()()
*/

// when closure2, this function is returning from the closure() ,everyting has
// gone from the global scope a=20 is also gone but when we call closure()2
// from the outside it will still remember and return the value a = 20;
// here the closure come into picture



//        ::::::::::::::::::::::::: CORNER CASES :::::::::::
// when ever a function is called every time a execution context is created
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    var a = 100;
    y()
    console.log(a)
}

x();   // this will print 100


// closure with setTimeout function

function x(){
    var i = 1;
    setTimeout(()=>{  
        console.log(i);
    },3000)
    console.log("Hey!!");
}

x()

/*
    Here
    function (){
        console.log(i);
    }
       this function forms a closure it's remember the value of i i.e 1
       and print it after 3000 second          : This is a call back function   
*/

// setTimeout+closure
for(var i=1 ; i<= 5 ; i++){
    setTimeout(()=>{
       console.log(i);   // this will print 6 6 times because of the reference     
    },i*1000)
}





//  :::::::::::::::::

function outest(){
    var k = 10;
    function outer(){
        var bk = 100 
        function inner(){
             console.log(k,bk);
        }
        return inner;
    }
      return outer;
}

outest()()();

/* Advantages of closure is 
  <1>  we can use it in setTimeout function
  <2>  we can use it for data privacy and data hiding

*/


// data privacy and data hiding example

/*
var count = 0;

const incr = ()=>{
    count++;
    console.log(count);
}

incr();    [as count function declared globally so data is not secure] */


// we can write this way

/*  function counter(){
      var count = 10;
      function increment(){
         count++;
         console.log(count);
     }
      return increment;
}

counter()();  */

// closure constructer function  :: because it's more sclable than the upper

function Counter(){
    let count = 0;
    this.incrementCounter = function (){
        count++;
        console.log(count);
    }
    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
}

let counter1 = new Counter();
counter1.incrementCounter();
 
//   *>   Anonymous function : A function without a fnc name is called A...