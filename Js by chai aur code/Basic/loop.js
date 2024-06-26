const arr1 = [10,54,87,9797,999];

for(const num of arr1){
    console.log(num);
}


// Map
const arr2 = [2,65,7,77,8,97]

const newArray = arr2.map((elem,index)=>{
    return elem*2
})

console.log("map");
console.log(arr2)
console.log(newArray)
//  (6) [2, 65, 7, 77, 8, 97]
//  (6) [4, 130, 14, 154, 16, 194]

// filter

const arr3 = [2,65,7,77,8,97]

const newArray2 = arr3.filter((elem,index)=>{
    return (
        elem > 50
    )
})

console.log(newArray2);


/*  Filter
  
The filter() method iterates through an array, keeping only elements that 
pass a test defined by a callback function. It returns a new array containing
the filtered elements.

JavaScript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 600 },
  { name: "Mouse", price: 50 },
];
const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts); // Output: [{ name: "Laptop", price: 1200 }]

*/


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
  
  const person = people.find((p) =>  p.age === 30);
  console.log(person); // Output: { name: 'Bob', age: 30 }
  // returns only first matches element or object (only one)

// 2. filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8]



// For each loop
// when we want to not to return a new array and perform some task on an
// existing array 

let fEach = [10,54,74,88,98];

fEach.forEach((value)=>{
    console.log(value*2);  // this will print the existing array with new value
})

console.log(fEach);  // previous values will remain same

/*

Both filter() and find() are array methods in JavaScript that are 
used to search for elements in an array. However, they have different 
functionalities and return different results.

Filter:

The filter() method creates a new array containing only the elements that 
satisfy a specific condition. It takes a callback function as an argument, 
and for each element in the original array, it passes the element to the 
callback function. The callback function returns a boolean value, indicating 
whether or not to include the element in the new array. If the callback function 
returns true, the element is included; if it returns false, the element is excluded.

Example:
 
JavaScript
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
Use code with caution. Learn more
In this example, the filter() method is used to create a new array evenNumbers 
containing only the even numbers from the original array numbers. The callback 
function number => number % 2 === 0 checks if the current element number is even.
If it is, the element is included in the new array; otherwise, it is excluded.

Find:

The find() method returns the first element in the array that satisfies a specific 
condition. It takes a callback function as an argument, and for each element in the 
original array, it passes the element to the callback function. The callback function
returns a boolean value, indicating whether or not to stop searching. If the 
callback function returns true, the element is returned immediately, and the 
search is terminated. If the callback function returns false, the search continues
until the end of the array. If no element satisfies the condition, the find()
method returns undefined.

Example:

JavaScript
const numbers = [1, 2, 3, 4, 5, 6];

const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber); // Output: 2
Use code with caution. Learn more
In this example, the find() method is used to find the first even number in the
array numbers. The callback function number => number % 2 === 0 checks if the 
current element number is even. If it is, the element is returned and the search
 is terminated; otherwise, the search continues.

Key Differences:

Purpose:filter() creates a new array containing all elements that satisfy a
 condition, while find() returns the first element that satisfies a condition.

Return Value:filter() returns a new array, while find() returns a single element
 or undefined.

Use Cases:filter() is useful for extracting a subset of data based on criteria,
while find() is useful for locating a specific element.


*/



///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/**
            :::::::::::::::::::::LOOP in Details  ::::::::::::::::::::::::::::::            
          

Looping in JavaScript and React JS: for...in, for...of, forEach, and map
There are several ways to iterate over collections (arrays, objects) in JavaScript
and React JS. Each has its own unique characteristics and use cases. Let's explore
them:

1. for...in loop:

Syntax: for (variable in object) {...}
Iterates over the enumerable properties of an object (key-value pairs).
Example:
JavaScript
const person = { name: "John", age: 30 };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
Use code with caution. Learn more
This will print "name: John" and "age: 30".

2. for...of loop:

Syntax: for (variable of iterable) {...}
Iterates over the values of an iterable object (arrays, strings).
Example:
JavaScript
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
Use code with caution. Learn more
This will print "apple", "banana", and "orange".

3. forEach loop:

Syntax: array.forEach(callbackFunction)
Calls a callback function for each element in an array.
Example:
JavaScript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));
Use code with caution. Learn more
This will print 1, 2, 3, 4, and 5.

4. map loop:

Syntax: array.map(callbackFunction)
Creates a new array with the transformed values returned by the callback function.
Example:
JavaScript
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]             
  
*/