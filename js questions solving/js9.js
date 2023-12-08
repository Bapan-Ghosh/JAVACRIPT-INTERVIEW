let str = prompt("Enter the string");

const capitalizeFirstWord = (str)=>{
     let allwords = str.split(" ").map((word)=>{
         return word[0].toUpperCase() + word.substring(1);
        //  split fn will split each word and store in a array then, as it's an
        // array so will apply toupper to the and then we will merge rest words
     })

     return allwords.join(" ");
}

console.log( capitalizeFirstWord(str));