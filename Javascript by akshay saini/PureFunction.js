/*
     A Pure Function is a function (a block of code) that always returns the same
     result if the same arguments are passed. It does not depend on any state or 
     data change during a program’s execution. Rather, it only depends on its 
     input arguments.
     Also, a pure function does not produce any observable side effects such as 
     network requests or data mutation, etc
 

    Let’s see the below JavaScript Function:
    function calculateGST(productPrice) {
        return productPrice * 0.05;
    }
        console.log(calculateGST(15))


    The above function will always return the same result if we pass the same 
    product price. In other words, its output doesn’t get affected by any other
    values/state changes. So we can call the “calculate GST” function a Pure 
    Function.    

 */

    //     non pure fun
let tax = 20;
function calculateGST(productPrice) {
    return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15))
// It is not a pure function as the output is dependent on an external variable
// “tax”. 
// this is a non pure function because tax value can be changed 