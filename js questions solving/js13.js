let arr = [
  { name: "Bapan",  gender: "male" },
  { name: "Komal",  gender: "female" },
  { name: "Monika", gender: "female" },
  { name: "Arnab",  gender: "female" },
  { name: "Sourav", gender: "male" },
  { name: "Kunal",  gender: "male" },
];

let count = 0;
for (const element in arr) {
  if (element.gender !== "male") {
    count++;
  }
}

// console.log(count)

for (let outer = 1; outer <= count; outer++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender !== "male") {
      arr.splice(i, 1);
      break;
    }
  }
}

console.log(arr);

// 2 loop to chalate holo reason, jodi amra 1 ta loop chalai tale jokhon splice 
// 1 ta object remove krbe tokhn porer object ta oi jaigai chole asbe
// ar i++ jokn e hobe tokn ota ar check hbe na , so that's why nested loop.