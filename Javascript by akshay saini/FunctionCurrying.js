// this is currying with bind
let multiply = function(x,y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this , 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this , 3);
multiplyByThree(5);

// currying with closure
// a function that returns another function which takes another arguments

// Q1.  sum(2)(6)(1)
const sum = (a)=>{ 
    return (b)=>{
         return (c)=>{
            return a*b*c;
         }
     }
}

console.log(sum(2)(6)(1)); 

/* Q2. function currying
       evaluate("sum")(4)(2) => 6
       evaluate("multiply")(4)(2) => 8
       evaluate("divide")(4)(2) => 2
       evaluate("substract")(4)(2) => 2
*/

const evaluate =(s)=>{
    return (num1)=>{
       return (num2)=>{
        switch (s) {
            case "sum":
                return num1 +num2;
                break;
            case "multiply":
                return num1 *num2;
                break;
            case "divide":
                return num1 / num2;
                break;
            case "substract":
                return num1 - num2;
                break;        
            default:
                break;
         }
       }
    }
}

evaluate("sum")(4)(2)
evaluate("multiply")(4)(2)
evaluate("divide")(4)(2)
evaluate("substract")(4)(2)

//  Q-3 - Infinite currying => sum(1)(2)(3)....(n)
const sumInfinite = (a)=>{
    return (b)=>{
        if(b) return sumInfinite(a+b);
        return a;
     } 
}

console.log(sumInfinite(2)(6)(1)()); 
