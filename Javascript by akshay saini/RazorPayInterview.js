// Q.1 

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  wait(3000).then(() => console.log("hello"));
  
//  q. 2
Array.prototype.partition = function(callback) {
    return this.reduce((acc, current) => {
      acc[callback(current) ? 0 : 1].push(current);
      return acc;
    }, [[], []]);
  };
  
  const isEven = (x) => x % 2 === 0;
  console.log([1, 2, 3].partition(isEven));

// q. 3

function sumOfIntegers(arr) {
    let sum = 0;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        sum += sumOfIntegers(item);
      } else if (Number.isInteger(item)) {
        sum += item;
      }
    });
    return sum;
  }
  
  const nestedArray = [1, 2, 3, [1, 2, ["string", 4]]];
  console.log(sumOfIntegers(nestedArray)); // Output: 13 (1 + 2 + 3 + 1 + 2 + 4)
  