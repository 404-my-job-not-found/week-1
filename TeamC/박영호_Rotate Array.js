var rotate = function (nums, k) {
  const length = nums.length;
  k = k % length;
  nums.unshift(...nums.splice(length - k));
};
