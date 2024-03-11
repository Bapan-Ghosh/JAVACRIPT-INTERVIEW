//array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
/*
   Q. const res = {
      data: ['a', 'b', 'c'] 
     };

     convert this to 
     {
            0 : "a",
            1 : "b",
            3 : "c"
     }
*/

const res = {
    data: ['a', 'b', 'c'] 
};

const transformedObject = res.data.reduce((acc,val,index,res)=>{
      acc[index] = val;
      return acc;
},{})

console.log(transformedObject)