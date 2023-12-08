console.log(k);  // can't access k before initialization
console.log(v);
let k = 20;
var v = 55;

//during the memory allocation 

// k will be allocated inside script object and  k = undefined
// v will be allocated inside global 


 /* declaring the variable K until we initialize some value to it
    the time zone is known as Temporal dead zone

*/