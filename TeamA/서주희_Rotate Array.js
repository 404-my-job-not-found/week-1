var rotate = function (nums, k) {
  const copiedNums = [...nums];
  const length = nums.length;
  let numsIndex = k,
    copiedNumsIndex = 0;

  while (copiedNumsIndex < length) {
    numsIndex %= length;

    nums[numsIndex] = copiedNums[copiedNumsIndex];

    copiedNumsIndex++;
    numsIndex++;
  }

  return;
};
