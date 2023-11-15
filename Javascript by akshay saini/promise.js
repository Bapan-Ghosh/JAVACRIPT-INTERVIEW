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


//user will ask for a number b/w 0 se 9 and if the number is below 5 resolve if not reject

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