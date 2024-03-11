 function abc(){
     console.log(x);
     var x;   // var will give as output as undefined
               // If it's let instead of var then it would give us Cannot 
               // access 'x' before initialization
 }

abc();