let arr = ["ok", 100, "cool", 700, "DADA", "WOW", "MOMO", 200];
let sum = 0;

// Use a loop instead of map
for (let i = 0; i < arr.length; i++) {
  if (typeof(arr[i]) === 'number') {
    sum += arr[i];
  }
}

console.log(sum);