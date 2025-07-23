/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 반환값은 최종 nums배열의 길이이고 nums배열 자체가 변경되어야함.
  //[0,0,1,1,1,2,2,3,3,4]
  //[0,1,2,3,4,2,2,3,3,4]

  let pointer = 0;

  for (let i = pointer + 1; i < nums.length; i++) {
    if (nums[pointer] !== nums[i]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  return pointer + 1;
};
