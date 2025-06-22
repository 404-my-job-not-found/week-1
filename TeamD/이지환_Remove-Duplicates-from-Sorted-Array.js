/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let uniqueIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    return uniqueIndex + 1;
};

const nums = [0, 0, 1, 2];
const k = removeDuplicates(nums);
console.log(k);

console.log(nums.slice(0, k));
