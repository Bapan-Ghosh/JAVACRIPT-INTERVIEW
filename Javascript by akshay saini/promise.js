/*
     Understanding Promises:

Asynchronous Operations: Imagine a waiter taking your order (code execution) and
going back to the kitchen (asynchronous operation). The waiter promises to return 
with your food (result), but you don't know exactly when. That's where Promises 
come in!

      Promise is an object that represents eventual completion or failure   
                      of an asynchronous operation. It represents three states: 

                 Pending: Operation is ongoing (waiter is preparing the food).
            Fulfilled: Operation completed successfully (waiter returns with food).
               Rejected: Operation failed (waiter dropped the food).

*/


/* var ans = new Promise((res, rej)=>{
    if(true){
        return res();
    }
    else
    {
        return rej();
    }
})

ans.then(function () {
    console.log("resolve hogaya");
})
.catch(function(){
    console.log("Reject ho gaya");
})     */


// user will ask for a number b/w 0 se 9 and if the number is below 5 resolve 
// if not reject

var ans = new Promise((res, rej) =>{
    var n = Math.floor(Math.random() *10);

    if(n < 5)
       return res();
    else
       return rej();   
})

ans.then(function(){
    console.log("below")
})
 .catch(function(){
    console.log("above")
 })



//  Another example

// Nested promises :

 /*
            sabse pahle ghar par aao
            gate kholo aur gate lago
            khana pakao khana khao
            
 */

 var ans = new Promise((res,rej)=>{
      return res("sabse pahle ghar par aao")
 })

 var p2 = ans.then((data)=>{
    console.log(data);   //sabse pahle ghar par aao
    return new Promise((res, rej)=>{
        return res("gate kholo aur gate lago");
    })
 })

  p2.then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })

// Promise is an object, representing eventual complesition of an async operation  

// promise EP-02 S-02

const cart = ["Shoes","Pants","Laptop"];
createOrder(cart,function(orderId){
    proceedToPaymentId(orderId);
});

/* In this case we are kinds of dependent on the createOrder API
   to call theproceedToPaymentId API ,and we don't even know whether
   the call back function is call one time or multiple times and there is 
   no surety that the call back fn will call
*/

const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPaymentId(orderId);
})

// here createOrder will return an empty object and then inside the promise 
// object that will definetly call and it will call just once

const apI = "https://jsonplaceholder.typicode.com/posts"

const user = fetch(apI);
console.log(user);
user.then(function(data){
    console.log(data)
})


// Output questions
/////////////////////////
console.log("Start")

const promise1 = new Promise((resolve, reject)=>{ // this is sync code
    console.log(1);
    resolve(2);
})

promise1.then((res)=>{  // this is a async code
    console.log(res);
})

console.log("end")

/*
    : Output :
     start 
     1
     end
     2
*/


console.log("Start")

const promise2 = new Promise((resolve, reject)=>{ // this is sync code
    console.log(1);
    //if there is no resolve then the then will never call
})

promise2.then((res)=>{  // this is a async code
    console.log(res);
})

console.log("end")

//OUTPUT
/*   Start
     1
     end
 */

// Q3. Promise chaining
//  Promises are useful when you have to handle more than one asynchronous task,
//  one after another. For that, we use promise chaining
function job(){
    return new Promise(function (res, rej){
        reject();
    })
}

let promise166 = job();

promise166
     .then(function(){
        console.log("Success 1");
     })
     .then(function(){
        console.log("Success 2");
     })
     .then(function(){
        console.log("Success 3");
     })
     .catch(function(){
        console.log("Error 1");
     })
     .then(function(){
        console.log("Success 4");
     })

// output will be 
// Error 1 , Success 4 =>>>> Because of the rej error 1 will print and then    