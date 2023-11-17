 // call by value => Deep copy

// call by reference => shallow copy

// shallow and deep copy only applicable in non premitive data types(array & objects)

// Shallow copy

let originalValue = { 
    name : "Bapan",
    age : 32
}

let copyValue = originalValue;

copyValue.age = 24;

console.log(originalValue);
console.log(copyValue);
// Both the value get changed

//::::::: spread operator (partial deep copy):::::::::::::::::::::::::::::::::::::::::::
let originalValue2 = {
    namee : "Bapan",
    age : 32,
    address:{
        city:"Kolkata",
        state:"West Bengal"
    }
}

let copiedValue ={
 ...originalValue2
 ,name:"Marvel",
 address:{
    ...originalValue2.address,
    city : "Barasat"
 }
 
}

console.log(originalValue2);    
console.log(copiedValue);   

// :::::::::::::::::::::::::::::::::::: Deep Copy :::::::::::::::::::::::::::::
const originalObject = { name: "John", age: 30, address: { city: "New York" } };
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));


// NOTE ::::::::
/* Shallow Copy:
  A shallow copy of an object or array creates a new object or array,
  but it does not create copies of the nested objects or arrays within
  the original structure. Instead, it copies references to those nested
  objects or arrays. As a result, changes made to the nested objects in
  the copy will affect the original, and vice versa.     */

/*  Deep Copy:
    A deep copy, on the other hand, creates a completely independent 
    duplicate of the original object or array, including all nested 
    objects or arrays. Changes made to the deep copy do not affect 
    the original, and vice versa.                       */  
