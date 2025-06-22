var removeDuplicates = function (nums) {
  let writeIndex = 0;
  let readIndex = 1;

  while (readIndex < nums.length) {
    if (nums[writeIndex] !== nums[readIndex]) {
      writeIndex++;
      nums[writeIndex] = nums[readIndex];
    }

    readIndex++;
  }

  return writeIndex + 1;
};
