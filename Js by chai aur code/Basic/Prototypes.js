// All JavaScript objects inherit properties and methods from a prototype.
// In JavaScript, the prototype is an object that is associated with every 
// function and object by default.(whenever we create an obj or fn js 
// automatically creates prototypes  ) 

// When a new object is created in JavaScript, it autmatically inherits 
// properties and methods of its prototype object. This is known as prototypal inheritance
const obj = {
    name:"Bapan",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll;
    }
}

// console.log(obj);

const obj2 = {
    roll:1,
    __proto__:obj   // inherited the properties of obj 
}

// console.log(obj2.roll);
console.log(obj2.name);
console.log(obj2.getRoll());

// now we want to access name from obj in obj2 object