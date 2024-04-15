let arr = [0,1,2,3,4];
// console.log(arr);
arr.shift();
arr.shift();
console.log(arr);

// To convert array to string

const array = [54,88,7,99,14,0];
const newArray = array.join();   //converts the array into a string
const newArray2 = array.toString();   //converts the array into a string
// console.log(typeof newArray);
console.log("newArray : "+newArray);
console.log(newArray2);

// slice 
const ar1 = [0,1,2,3,4,5];
const ar2 = ar1.slice(1,3);  // 1 to (3-1)
console.log("Updated first",ar2);

// splice
const myn1 = [0,1,2,3,4,5];
console.log("old second",myn1);
const myn2 = myn1.splice(1,3); // 1 er por theke koto gulo 3 te ekhane
console.log("After splice",myn1)
console.log("Updated second",myn2);

//old arrays
console.log("old first",ar1);
console.log("old second",myn2);

/* **NOTE
  <1> slice :- Doesn't change the original array and its arr1.slice(1,4) i.e 1 to 3
  <2> splice :- Change the original array and its arr2.splice(1,4) i.e 1 to 4
*/


// :: cornar cases ::
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// this will merge all the subarrays into a single array
console.log(real_another_array);

// to convert a string to a array

console.log(Array.from("Hitesh"))

// Sort array
const strArray1 = ["Samsung","Apple","Moto","LG","Google"] 
console.log(strArray1.sort());
const array1 = [10,87,4,1,0,7,9,55];
// ascending order
console.log(array1.sort((a,b)=>a-b))
// descending order
console.log(array1.sort((a,b)=>b-a))

// 
// Sorting an array of strings in reverse alphabetical order:
const fruits = ['banana', 'apple', 'cherry', 'date', 'fig'];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // ['fig', 'date', 'cherry', 'banana', 'apple']

// spread operator
const a = [10,50,77]
const b = [...a];  // jokhn amra spread operator use kori tokhon basically
                   // eta spread hoye jai array elements theke, tai array
                  // er vitor rakhte amra [ ] use kori, ****to copy 



// Sorting objects in an array based on a specific property:
const persons = [
   { name: 'Alice', age: 30 },
   { name: 'Bob', age: 25 },
   { name: 'Charlie', age: 35 },
 ];
 
// Sort by age in ascending order
 persons.sort((a, b) => a.age - b.age);
 console.log(persons);

//
//  Sorting objects in an array based on a specific property in descending order:

 const persons2 = [
   { name: 'Alice', age: 30 },
   { name: 'Bob', age: 25 },
   { name: 'Charlie', age: 35 },
  ];
 
 // Sort by age in descending order
 persons2.sort((a, b) => b.age - a.age);
 console.log(persons2);