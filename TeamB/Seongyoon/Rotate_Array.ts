/**
  Do not return anything, modify nums in-place instead.
  아무것도 리턴하지마세요. in-place로 구현해주세요.
 */
function rotate(nums: number[], k: number): void {
  const numsLength = nums.length;

  for (let i = numsLength; i > numsLength - k; i--) {
    nums.unshift(nums.pop() as number);
  }
}
