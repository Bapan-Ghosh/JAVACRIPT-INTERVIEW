// let str = prompt("Enter the string ");
const occu = (str) =>{
     let occurencesObj = {};
//   using object so that we can count in key:value pair, like .......{a:1}
     str.split("").map((elm) =>{
         if(occurencesObj.hasOwnProperty(elm) == false){
            occurencesObj[elm] = 1;
         }
         else{
            occurencesObj[elm]++; 
         }
     })

     return occurencesObj;
}
  
console.log(occu("bapan"));
