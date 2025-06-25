/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const result = nums.slice(-k)
                        .concat(nums.slice(0, -k));
    
    nums.splice(0, nums.length, ...result)
};