/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const isDuplicate = new Set(nums);
    
    return isDuplicate.size !== nums.length;
};