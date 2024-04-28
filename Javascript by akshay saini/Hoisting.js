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
 
/////////////////
function buildFunction() {
    var arr = [];
    for(var i = 0; i < 3; i++) {
      let j = i;  //Using let to assign j
      arr.push(
        function(){
          console.log(j);
        }
      )
    }
     return arr;
  }
  
  var fs = buildFunction();
  fs[0]();  //0
  fs[1]();  // 1
  fs[2]();  // 2