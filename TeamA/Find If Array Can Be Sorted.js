/**
 * @param {number[]} nums
 * @return {boolean}
 */

const getOneCountInBits = (num) => {
  let count = 0;

  while (num > 0) {
    const remainder = num % 2;

    if (remainder === 1) {
      count++;
    }

    num = Math.floor(num / 2);
  }

  return count;
};

const canSortArray = (nums) => {
  const length = nums.length;
  let count = length;

  while (count--) {
    let i = 0;

    for (let j = 0; j < length - 1; j++) {
      const first = nums[j];
      const second = nums[j + 1];

      if (first > second) {
        if (getOneCountInBits(first) === getOneCountInBits(second)) {
          nums[j] = second;
          nums[j + 1] = first;
        } else {
          return false;
        }
      }
    }
  }

  return true;
};
