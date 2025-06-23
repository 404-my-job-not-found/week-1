/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 1;
  var pos = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) continue;
    else {
      nums[pos] = nums[i];
      pos += 1;
    }
  }

  return pos;
};
