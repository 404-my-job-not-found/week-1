/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums: number[]): number => {
  const set = Array.from(new Set(nums));
  nums.forEach((_, idx) => {
    if (idx < set.length) {
      nums[idx] = set[idx];
    }
  });
  return set.length;
};
