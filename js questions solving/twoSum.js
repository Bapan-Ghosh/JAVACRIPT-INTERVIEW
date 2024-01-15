// Ques 4 - Two Sum
/* 
    Given an array of integers nums and an integer target.

    input : nums = [2,7,11,15], target = 9
    output: [0,1] (Because nums[0] + nums[1] == 9, we return [0,1])

    input: nums = [3,2,4], target = 6,  
    output : [1,2]
*/

const twoSum = (nums, target)=>{
    let obj = {};
    for(let i=0 ; i<nums.length ; i++){ 
        let n = nums[i];
        if(obj[target - n] >=0){
            return [obj[target - n],i];
        }
        else obj[n] = i;  
    }
    return 0;
} 

console.log(twoSum([2,7,11,15],9));
