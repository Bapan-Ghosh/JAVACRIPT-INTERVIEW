let abc = null;
console.log(typeof abc);       // object
console.log(typeof []);        // object
console.log(typeof null)       // object
console.log(typeof undefined)  // undefined

let st = "12"
let nm = Number(st);
let stt = "444";
let ok = parseInt(stt);
console.log(ok);
console.log(nm);
let number = 33;
let stringNum = String(number);
console.log(typeof stringNum);

let ll= "45hfhg"
console.log(Number(ll)); // this will print NaN 


console.log("1"+2);  // 12
console.log(1+"2");  // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32       => always calculates left to right
