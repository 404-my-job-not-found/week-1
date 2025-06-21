var containsDuplicate = function (nums) {
  const nonDuplicatedNums = new Set(nums);

  return nonDuplicatedNums.size !== nums.length;
};
