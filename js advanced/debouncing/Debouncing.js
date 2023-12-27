 // Deboucing in javascript
// Use to optimize performance of web apps.

let count = 0;
function getData(){
    console.log("fetching data"+count++);
}

function myDebounce(call,d){
    let timer;
    return function(...arg){
          if(timer) clearTimeout(timer);
          timer = setTimeout(()=>{
             call()
          },d)
    }
}


const betterFunction = myDebounce(getData,3000);