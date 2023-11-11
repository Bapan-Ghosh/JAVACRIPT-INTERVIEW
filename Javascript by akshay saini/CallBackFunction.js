setTimeout(function x(){
    console.log("ppppppp")
},2000)

//here the function x() is a call back function
// We use call back function when we want to call a function after some time 
// like here you can see this function is calling after 2 second.


//call back function with eventlistener (closure to secure data,data hiding)

const call = ()=>{
       let increment = 0; // closure
       document.getElementById('click').addEventListener("click",()=>{
           console.log(++increment);
       })
}

call();



/*
     ()=>{
           console.log(++increment);
       }

       this is also a callback function
 
*/