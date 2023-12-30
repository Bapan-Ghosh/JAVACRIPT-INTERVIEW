/*
     Understanding Promises:

Asynchronous Operations: Imagine a waiter taking your order (code execution) and
going back to the kitchen (asynchronous operation). The waiter promises to return 
with your food (result), but you don't know exactly when. That's where Promises 
come in!

      Promise Object: It's a placeholder for the eventual result (or failure) 
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

// Promise is an object, representing eventual comlesition of an async operation  