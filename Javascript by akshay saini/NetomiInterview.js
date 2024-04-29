let isLoopRunning = true

setTimeout(() => isLoopRunning = false, 2000)

while(isLoopRunning) {
console.log('loop is running')
}



// function func1(){
//   console.log(x);
//   console.log(y);

//   var x = 2;             // undefined
//   let y = 12;            // can't access y before initialization
// }
// func1();

// let obj1 = {x: 1, y: { z: 2}}

// function deepcopy(obj1) {
 

//   let result = {}
//   Object.keys(obj1).forEach((key)=>{
//     if(typeof obj1[key] === 'object'){
//       result[key]=deepcopy(obj1[key]);
//     }
//     else {
//       result[key]= obj1[key];
//     }
//   })
//   return result;
// }


// let obj2 = deepcopy(obj1)

// obj2.x = 10; 
// obj2.y.z = 20

// obj2 = {
//   x:10;
//   y: {
//     z:20
//   }
// }

// obj1 = {
//   x:1,
//   y:{
//     z:20
//   }
// }
// console.log(obj1);
// console.log(obj2);


// let obj = {
//   name: 'vishal',
//   fn: function (){
    
//     console.log(this.name);
//   }
// }

// let obj1 = {
//   name:'Mayank',
// }

// obj.fn.call(obj1);



// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// timer1
//promise1
// timer2



let calculator = {
  total: 0,
  add: function (arg){
    this.total = arg+ this.total;
    return this;
  },
  multiply: function (arg) {
    this.total *= arg;
    return this;
  }
};

const result = calculator.add(10).multiply(5)
console.log(result.total)
