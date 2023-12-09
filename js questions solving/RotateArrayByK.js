// Input nums : [1,2,3,4,5,6,7], k = 3 ---->>>>>> output: [5,6,7,1,2,3,4]
// Input nums : [-1,-100,3,99] , k = 2 ---->>>>>> output: [3,99,-1,-100]

// First reverse [7,6,5,4,3,2,1] then ....

// time complexity is O(n) and space complexity is O(1)
function rotateK(nums,k){
     let size = nums.length;
     reverse(nums,0,nums.length-1);         
     reverse(nums,0,k-1);         
     reverse(nums,k,nums.length-1);    
     
     for(const l of nums){
        console.log(l);
     }
}

function reverse(nums,left,right){
    while(left < right){
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}

rotateK([-1,-100,3,99],2);
