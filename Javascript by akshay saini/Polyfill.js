/*
   Polyfill is a piece of code that provides functionality that is not natively 
   available in the current version of a browser or JS engine. Polyfills are
   commonly used to implement new web standards or features that have been added
   to JS but are not yet widely supported by all web browsers. For example, if a
   new JavaScript method is introduced in the latest version of the language, 
   but older browsers do not support it, a polyfill can be written to add support
   for the new method in those older browsers.
*/


//Q :Polyfill for call method

let car1 = {
    color :"Red",
    company : "TATA",
};

function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
}

purchaseCar.call(car1,"$",88888);
//
Function.prototype.myCall = function (context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "It is not callable");
    }

    context.fn = this; // inserting our fn to the context
    context.fn(...args); // inserting our arguments to the context
};

purchaseCar.myCall(car1,"$",88888);

// and for apply everything will be same only difference is
Function.prototype.myApply = function (context = {}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "It is not callable");
    }

    if(!Array.isArrray(args)){
        throw new TypeError ("not an array");
    }

    context.fn = this; // inserting our fn to the context
    context.fn(...args); // inserting our arguments to the context
};
purchaseCar.myApply(car1,["$",88888]);

// Polyfill for Bind
// normal bind 
const newFunc = purchaseCar.bind(car1);
console.log(newFunc("@",500000000000))


// bind
Function.prototype.myBind = function (context = {}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "It is not callable");
    }
   
    context.fn = this;
    return function (...newArgs){
        return context.fn(...args, ...newArgs);
    } 
};

const newFunc2 = purchaseCar.myBind(car1);
console.log(newFunc2("@",500000000000))