let arr = [
  { name: "Bapan", gender: "male" },
  { name: "Komal", gender: "female" },
  { name: "Monika", gender: "female" },
  { name: "Samapti", gender: "female" },
  { name: "Sourav", gender: "male" },
];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].gender !== "male") {
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
