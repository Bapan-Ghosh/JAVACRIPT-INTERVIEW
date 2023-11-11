let str = prompt("Enter the string");

const capitalizeFirstWord = (str)=>{
     let allwords = str.split(" ").map((word)=>{
         return word[0].toUpperCase() + word.substring(1);
        //  split fn will split each word and store in a array then, as it's a
        // array so will apply toupper to the and then we will merge rest word
     })

     return allwords.join(" ");
}

console.log( capitalizeFirstWord(str));