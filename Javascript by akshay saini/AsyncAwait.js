// koi bhi esa function jisme aap async code likhenge, kyoki async code hai
// to aap promises ka istemaal kar sakte hai, jab answer aayega aapko
// then lagana padega, us then ko lagane se bachne ke liye, aap async await
// ka istemal kar sakte hai.

/*
  Asynchronous functions in JavaScript are functions that can run without blocking
  the main thread. This means that the function can continue to run even while the
  main thread is waiting for something to happen, such as a network request or a 
  file operation. This is useful for tasks that take a long 
  time to complete, such as making a network request or reading a file. 
  Handling timers and other time-based events
*/

function abcd(){
  fetch(`https://randomuser.me/api/`)
    .then((raw) => {
      return raw.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
} //       if we don't use async await then we have to write the code
//       in this way

async function abcd() {
  let raw = await fetch(`https://randomuser.me/api/`)
  let ans = await raw.json();
  console.log(ans);   
}

// jab  bhi koi code async hai to aapko uske liye wait karna padta hai
// kyoki humein nehi pata uska answer kab aayega 
abcd()