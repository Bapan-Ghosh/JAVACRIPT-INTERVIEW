const duplicate = (arr)=>{
      return [...arr,...arr]
}

var arr = [1,2,3,4,5,6];
let Copyarr = duplicate(arr);

console.log(Copyarr);
console.log(Copyarr.length);