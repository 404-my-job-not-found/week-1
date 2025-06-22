/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {   
    const set = new Set(nums);
    const newArr = [...set];

    for (let i = 0; i < newArr.length; i++) {
        nums[i] = newArr[i]; // 앞부분만 덮어쓰기
    }

    return newArr.length;
};