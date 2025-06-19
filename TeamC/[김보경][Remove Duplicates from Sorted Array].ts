// input: array nums
// output: number of unique elements in the array => K
// remove the duplicates in-place
// example: [0,0,1,1,1,2,2,3,3,4] => K = 5, nums = [0,1,2,3,4]

function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      // nums[k]는 쓰는 용도
      // nums[i]는 읽는 용도
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}
