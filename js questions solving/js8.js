let str = prompt("Enter the string :");

console.log(alphabaticalOrder(str));

function alphabaticalOrder(str){
     return str.split("").sort().join("");
}
