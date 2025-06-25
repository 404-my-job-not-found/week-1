var rotate = function (nums, k) {
  //     이렇게 하니까 time exceed ㅠㅠ
  //     k %= nums.length;
  //     for(let i=0; i<k; i++){
  //         nums.unshift(nums.pop());
  //     }
  k %= nums.length;
  reverse(nums, 0, nums.length - 1); // [7, 6, 5, 4, 3, 2, 1]
  reverse(nums, 0, k - 1); // [5, 6, 7, 4, 3, 2, 1]
  reverse(nums, k, nums.length - 1); // [5, 6, 7, 1, 2, 3, 4]
};

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
