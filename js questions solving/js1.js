// Reverse a given string
var userInput = prompt("Please enter some text:");

var savedStr = userInput.split(" ")
//    here split function will return ['bapan','ghosh]
    .map((word)=> {
        return word.split("").reverse().join("")
        //here split will split sm as upper and reverse 'napab' and 'hsohg' ['',''] then join it to a string
    })
 
console.log(savedStr.join(" "))    