//By using Kadane's Algorithm 
function maxSubArray(nums){
    let currentSum = 0;
    let maxSum = 0;

    for(let i=0 ; i<nums.length ; i++){
        currentSum += nums[i];
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
        if( currentSum < 0){
            currentSum = 0;
        }
    }
    console.log(maxSum);
}

maxSubArray([4,-1,2,1]);