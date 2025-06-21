/**
 Do not return anything, modify nums in-place instead.

  // k가 nums.length / 2 보다 작으면 k만큼의 요소를 뒤에서 잘라 보관
  // nums[0]부터 nums[nums.length - k - 1]까지의 요소를 뒤로 옮김
  // 그 뒤에 잘라 보관한 요소를 붙임

  // k가 nums.length / 2 보다 크면 nums[0]부터 nums[k - 1]까지의 요소를 잘라 보관
  // nums[nums.length - k]부터 nums[nums.length - 1]까지의 요소를 앞으로 옮김
  // 그 뒤에 잘라 보관한 요소를 붙임
 */
function rotate(nums: number[], k: number): void {
  k %= nums.length;
  if (k < nums.length / 2) {
    const temp = nums.splice(nums.length - k, k);
    nums.unshift(...temp);
  } else {
    const temp = nums.splice(0, nums.length - k);
    nums.push(...temp);
  }
};