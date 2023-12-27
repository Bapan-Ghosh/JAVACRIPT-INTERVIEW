// All JavaScript objects inherit properties and methods from a prototype.
//In JavaScript, the prototype is an object that is associated with every function and object by default. 
const obj = {
    name:"Bapan",
    getName:function(){
        return this.name;
    },
    getRoll:function(){
        return this.roll;
    }
}

console.log(obj);

const obj2 = {
    roll:1,
    __proto__:obj
}

// console.log(obj2.roll);
console.log(obj2.name);
console.log(obj2.getRoll());

// now we want to access name from obj in obj2 object