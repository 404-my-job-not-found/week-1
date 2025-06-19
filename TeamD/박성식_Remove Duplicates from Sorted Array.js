const removeDuplicates = (nums) => {
  const uniqueNums = new Set(nums);
  nums.length = 0;
  nums.push(...uniqueNums);

  return nums.length;
};

const arrayNum = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arrayNum);
