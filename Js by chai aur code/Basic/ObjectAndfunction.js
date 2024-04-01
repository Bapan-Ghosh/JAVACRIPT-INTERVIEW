// const flipkart = new Object();    ::::This is a singletone object

// object literals
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
console.log(user[0].hasOwnProperty("cool")) // false

const checkObj ={name:"Bapan",age:20,game:"Iron Man"}
console.log(checkObj.hasOwnProperty('name'))         // true
// To check whether name property is available or not


// Object destructure

const smartWatch = {
     brand : "fastrack",
     model :"fastrack optimus",
     price : 2200
} 

const {brand,model,price,year = 2020} = smartWatch;

console.log(brand);
console.log(model);
console.log(price);
console.log(year);


// merge objects
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const bbj3 = Object.assign({},obj1,obj2);
// or
const obj3 = {...obj1,...obj2};

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
// (function () {
//     console.log("chai");
// })();

/*  
        {{}{}{}{}{}{}{}{}{}{}{}{} Falsy values {}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}}
         flase, 0 , -0 , BigInt 0n, "",null, undefined, NaN

        {{}{}{}{}{}{}{}{}{}{}{}{} Truthy values {}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}}
         "0", 'false' , " ", [], {}, function(){},  
*/

// Some object questions answers
// Q1.
const objjj = {
    a : "one",
    b : "two",
    c : "three",
};

objjj.a = "three";
console.log(objjj.a) // this will print a: "three", b: "two" =>a position
                  //will remain at the same position but value get replaced

// Q2.
const a = {};
const b = {key: 'b'};
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;
console.log(a[b]);  // this will print 456
/* 
    when we write a[b] = 123 this will try to convert b object to string
    now,
    a["[object object]"] = 123 like this
    and then when we write
    a[c] = 456
    it will overwrite like a["[object object]"] = 456

    //when we try to convert object to string directly it gives us 
      ["[object object]" ]
*/ 

// Q3. What's JSON.stringify and JSON.parse ?

const userr = {
     name :"Bapan",
     age: 24,
};

const strObj = JSON.stringify(userr); // this is to convert obj to string
localStorage.setItem("test",strObj);

console.log(JSON.parse(strObj)) // this is to convert string to obj


//Q4.

const value = {number : 10};
const multiply = (x = {...value}) =>{
    console.log((x.number *=2))
};

multiply(); // 20
multiply() // 20
multiply(value) // 20
multiply(value) // 40
 
