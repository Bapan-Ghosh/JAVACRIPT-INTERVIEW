let input = prompt("Enter a number :");
let number = parseInt(input);
// This is to convert int input to string

let reverse = (num)=>{
    let rev = 0;
    while(num !== 0){
        rev = num%10+rev*10;
        num = Math.floor(num / 10);
        //   this is to only int not decimal 
    }
    return rev;
}

console.log(reverse(number));