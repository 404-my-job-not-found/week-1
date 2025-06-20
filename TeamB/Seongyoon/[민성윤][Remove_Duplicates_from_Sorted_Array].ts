function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  
  let numsLength = 0;

  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[numsLength]) {
      numsLength++;
      nums[numsLength] = nums[index];
    }
  }

  return numsLength + 1;
}