const containsDuplicate = (nums) => {
  const numsMap = new Map();

  return nums.some((num, index) => {
    if (numsMap.has(num)) return true;

    if (index === nums.length - 1) return false;

    numsMap.set(num, index);
  });
};

const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

containsDuplicate(nums);
containsDuplicate(nums2);
containsDuplicate(nums3);
