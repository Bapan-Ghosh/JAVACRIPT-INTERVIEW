const score = 400;
console.log(score);  

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length)
//convart the number to a string
console.log(balance.toFixed(2));
// mane . er por 2 to digit nebe  

const hundreds = 1000000;
console.log(hundreds.toLocaleString());  // to print like 10,00,000 format

// **************************************MATH****************************
 
console.log(Math.abs(-4));
// this is for to get only positive values

console.log(Math.round(4.6));
console.log(Math.ceil(4.5)) // 5 always give upper values.
console.log(Math.floor(4.2)) // 4 always

console.log(Math.min(20,10,80,17,77,96,99));
console.log(Math.max(20,10,80,17,77,96,99));

// Random

console.log(Math.random())  // This will always give random value between 0-1
console.log(Math.floor(Math.random()*10)) //  This will always give random value between 
min = 10;
max = 20;

console.log(Math.floor(Math.random()*(max-min))+min)


