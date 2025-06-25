/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let i = 0; 
    
    for (let k = 1; k < nums.length; k++){
        if (nums[i] !== nums[k]){
            i++;
            nums[i] = nums[k];
        }
    }
    
    return i+1;
};

