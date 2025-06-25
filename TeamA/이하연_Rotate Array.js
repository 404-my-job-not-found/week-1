/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length;
  let smallK = k % len;

  return [...nums.slice(len - smallK, len), ...nums.slice(0, len - smallK)];
};
