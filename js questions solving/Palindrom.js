// An integer is a palindrome when it reads the same forward and backward

// input x = 121  --------->>>> : Output : true 
// input x = 100  --------->>>> : Output : false

const isPalindrome = function(x){
    // if( x < 0) return false;
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}

// here the + will convert the string to a number
console.log(isPalindrome(121));
