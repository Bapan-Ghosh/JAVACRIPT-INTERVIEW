const arr1 = [10,54,87,9797,999];

for(const num of arr1){
    console.log(num);
}


// Map
const arr2 = [2,65,7,77,8,97]

const newArray = arr2.map((elem,index)=>{
    return elem*2
})

console.log(newArray);

// filter

const arr3 = [2,65,7,77,8,97]

const newArray2 = arr3.filter((elem,index)=>{
    return (
        elem > 50
    )
})

console.log(newArray2);

// reduce method

const arr4 = [4,54,7,8,9,74,87,99];
const newArray3 = arr4.reduce((prev,next) =>{
     return prev+next;
})

console.log(newArray3);



/* ********************************************************************** */
// find and filter difference

// 1. find
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
  ];
  
  const person = people.find((p) => p.age === 30);
  console.log(person); // Output: { name: 'Bob', age: 30 }

// 2. filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8]

  