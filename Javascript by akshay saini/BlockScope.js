let A = 10;
var B = 20;

{
    let A = 100;
    var B = 200;
    console.log(A);
    console.log(B);
}

console.log(A);
console.log(B);

// This is called shadowing
