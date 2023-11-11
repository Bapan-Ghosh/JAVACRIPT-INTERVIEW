// const flipkart = new Object();    ::::This is a singlesone object
const user = [
    {
        name:"Bapan",
        email:"b@gmail.com",
        age:24
    },
    {
        name:"Sourav",
        email:"sourav@gmail.com",
        age:24
    }
]


console.log(user[0].name);
console.log(Object.keys(user[0]));
console.log(Object.values(user[0]));

const checkObj ={name:"Bapan",age:20,game:"Iron Man"}
console.log(checkObj.hasOwnProperty('name')) // To check whether name available or not


// Object destructure

const smartWatch = {
     brand : "fastrack",
     model :"fastrack optimus",
     price: 2200
} 

const {brand,model,price} = smartWatch;

console.log(brand);
console.log(model);
console.log(price);


// Function
/* const abc = function(){
      return 5;
  }

  console.log(abc())
*/

// case 1:
// ...rest operator
const sp =(...num1)=>{
    return num1;
}

console.log(sp(40,55,87,99,878787));

// rest operator another example """"""""""""""""""""""""""""""""
/*

function fun(...input){
        console.log(input)
		let sum = 0;
		for(let i of input){
			sum+=i;
		}
		return sum;
	}
	console.log(fun(1,2)); //3
	console.log(fun(1,2,3)); //6
	console.log(fun(1,2,3,4,5)); //15
 */   



//Passing an object to a function 

const objPass = (obj)=>{
    return obj.name  
}

console.log(objPass({
    name:"Bapan",
    age:12,
    phn:9087457585
}))

// Arrow function

const cool = ()=>{
    return "ok";
}

console.log(cool());

{/* <> */}
const cool2 = () => (4+5);
console.log(cool2());
 
const cool3 = () => ({hot : "chicken"})
console.log(cool3())


// this function only use inside object like :

const okBro = {
    name:"Samsung",
    model:"S21 FE",
    chillBro:function(){
        console.log(`${this.name}`);
        console.log(`${this.model}`);
    }
}

okBro.chillBro()

// Immediately Invoked Function Expressions(IIFE)
// (function chai(){
//     console.log("chai");
// })()


/*  
        {{}{}{}{}{}{}{}{}{}{}{}{} Falsy values {}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}}
         flase, 0 , -0 , BigInt 0n, "",null, undefined, NaN

        {{}{}{}{}{}{}{}{}{}{}{}{} Truthy values {}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}}
         "0", 'false' , " ", [], {}, function(){},  
*/

