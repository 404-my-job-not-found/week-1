// 처음 풀이
var removeDuplicates = function (nums) {
  const originLength = nums.length;
  let currentIndex = 1,
    startIndex = 0,
    endIndex = 0;
  let prevNum = nums[0],
    count = 2;

  while (count <= originLength) {
    if (nums[currentIndex] === prevNum) {
      endIndex = currentIndex;
      if (count === originLength) {
        nums.splice(startIndex, endIndex - startIndex);
      }
    } else {
      if (startIndex !== endIndex) {
        nums.splice(startIndex, endIndex - startIndex);
        startIndex++;
        endIndex = startIndex;
        currentIndex = startIndex;
      } else {
        startIndex = currentIndex;
        endIndex = currentIndex;
      }
    }
    prevNum = nums[currentIndex];
    currentIndex++;
    count++;
  }

  return nums.length;
};

// 두번째 풀이
var removeDuplicates = function (nums) {
  const length = nums.length;
  let pointer = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== nums[pointer]) {
      pointer++;
      nums[pointer] = nums[i];
    }
  }

  nums.splice(pointer + 1, length - pointer);

  return nums.length;
};
