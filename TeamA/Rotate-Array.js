/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  if (k === 0) return;

  const rotatedPart = nums.slice(-k);
  const remainingPart = nums.slice(0, n - k);

  nums.splice(0, n, ...rotatedPart, ...remainingPart);
};
