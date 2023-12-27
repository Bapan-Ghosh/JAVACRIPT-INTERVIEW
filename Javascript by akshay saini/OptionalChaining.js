const a = {
    how : "cool",
    so : "Ok",
    b :{
        c : {
            d: {
                name : "Bapan",
                city : "Kolkata",
                State : "West Bengal"
            }
        }
    }
}

console.log(a.b.c.d.name);  // This will print Bapan
console.log(a.b.c.d.pinCode); // this will give us undefined
//console.log(a.b.c.d.pinCode.justLookingLikeAWOW); // this will give us Cannot read property error
// To avoid this error  and execute rest of the code we use optional chaining
console.log(a?.b?.c?.d?.pinCode?.justLookingLikeAWOW);
/* but because of the optional chaining this will give undefined
   pinCode?. if it exist then only it will go to check the value of 
  .justLookingLikeAWOW if it is null/undefined then it will stop and
   give undefined value  */



   /* Same with array of object */

   const cool = [
    {name :"Bapan",city:"Kolkata"},
    {name :"Sourav",city:"Kolkata"}
   ]

   console.log(cool[0]); // this will print perfect value
   console.log(cool[3]); // undefined
  // console.log(cool[3].name); // this will give us an error
  console.log(cool[3]?.name); // to overcome the upper issue we use optional chaining