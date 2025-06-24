/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let length = nums.length;
    let rotate = [];
    // 회전 범위를 맞춤
    k = k % length;
    for (let i = 0; i < length; i++) {
        // 배열 회전 시킨 후에 어디로 가야하는지 찾음
        let index = (i + k) % length;
        rotate[index] = nums[i];
    }
    return rotate;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

let result = rotate(nums, k);
console.log("result: ", result);
