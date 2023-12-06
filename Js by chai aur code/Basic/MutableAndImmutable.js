let a = 2;
let b = 4;

let c =  b;
c = 787878;
// if we change the value of b it won't change the value of a because it's
// immutable


// now ,

let arr = [1 , 5 , 8];
let arr2 = arr;

arr2[1] = 44;
console.log(arr)
console.log(arr2)

// both value will be change because both arr and arr2 is pointing to the same
// location i.e it's mutable


// Objects are also mutable