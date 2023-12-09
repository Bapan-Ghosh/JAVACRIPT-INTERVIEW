// [0,0,1,1,1,2,2,3,3,4]
//
/*
   Logic ::
   We will take i=0;
   and run a for loop from j=1 to n-1
   step 1: i=0
     j=1,2
     nums[0] !=nums[1] false so j++
     check again ::
     nums[0] !=nums[2] true so i++ & nums[1] = nums[2]
   step 2: i=1  
     ..........will continue like that 
*/

var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;

    let i=0;
    for(let j=1 ; j<nums.length ; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))