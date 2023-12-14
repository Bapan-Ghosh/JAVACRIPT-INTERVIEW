// Q - 1 : Truncate the string
// Write a function called truncate that checks  the length of a given sting -str
// , and if it surpases a specified maximum length, maxlength, it replaces the
// end of the string with the ellipsis character "..." so that length matches 
// the maximum length

// Input : str = "Subscribe to my channel " , maxlength = 9
// Output : "Subscribe..."

// Splice is not available in js string so don't try to use it

function trunc (str, maxlength){
      if(str.length > maxlength){
         return str.slice(0,maxlength)+"...";
      }
}
let str ="Subscribe to my channel " 

console.log(trunc(str,9));