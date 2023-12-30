console.log("Start");

setTimeout(function cbt(){
    console.log("CB SetTimeout"); // this will go to call back queue 
},5000)

fetch("https://api.netflix.com")
  .then(function cbF(){
    console.log("CB NetFlix"); // this call back will go to web api and then after the fetch is done this call back will go to microtask queue
  })

console.log("End");

// microtask queue has the higher priority, and there is an event loop
// work of this event loop is to check all the time that call stack is empty or not
// if it's empty then take the call back fn from call back queue or microtask queue
// and put it into call stack *** at first event loop will take from microtask
// queue and then from call back queue


// *** all the call back function which comes through promises will go inside microtask queue