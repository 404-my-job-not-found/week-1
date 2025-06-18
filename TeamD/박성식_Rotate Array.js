const reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = temp;
  }
};

const rotate = (nums, k) => {
  // 이렇게 하면 k가 n개이면 unshift도 n번이라 n^2이라 실패함
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop());
  // }

  const len = nums.length;
  k = k % len;

  reverse(nums, 0, len - 1); // [7,6,5,4,3,2,1]
  reverse(nums, 0, k - 1); // [5,6,7,4,3,2,1]
  reverse(nums, k, len - 1); // [5,6,7,1,2,3,4]

  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
// 결과 값: [5,6,7,1,2,3,4]

const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rotate(nums2, k2);
// 결과 값: [3,99,-1,-100]

const num3 = [1, 2, 3];
const k3 = 4;
rotate(num3, k3);
