/**
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 */

let input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

//solution
const removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const result = removeDuplicates(input);

console.log(result);
