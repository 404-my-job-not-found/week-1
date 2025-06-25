/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const setArray = new Set(nums);
  return setArray.size !== nums.length;
};
