const name = "Bapan";
const repoCount = 50;

console.log(`Hello this is ${name} and repo count is ${repoCount}`)
// ` ` => backticks

// string object
const gameName = new String('Bapan') 

console.log(gameName);
console.log(typeof gameName);
console.log(gameName.toLowerCase()) // it won't change the original one
console.log(gameName)
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4);
const newString2 = gameName.substring(1);
console.log(newString);
console.log(newString2);
const url = "https://bapan.com/bapan%20ghosh"
console.log(url.replace('%20','_'));
console.log(url.includes('sundar'));
console.log(gameName.split(' ')); 
// 