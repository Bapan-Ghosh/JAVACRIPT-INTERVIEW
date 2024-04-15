let arr = ["ok", 100, "cool", 700, "DADA", "WOW", "MOMO", 200];
let sum = 0;

// Use a loop instead of map
for (let i of arr) 
{
  if (typeof(i) === 'number') {
    sum += i;
  }
}

console.log(sum);