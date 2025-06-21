// input : nums: number[], k: number
// output: number[]

function rotate(nums: number[], k: number): void {
  const numsLength = nums.length;
  k = k % numsLength;

  const rotatedArray = nums.slice(-k).concat(nums.slice(0, numsLength - k));

  // nums 배열 업데이트 필요
  for (let i = 0; i < numsLength; i++) {
    nums[i] = rotatedArray[i];
  }
}
