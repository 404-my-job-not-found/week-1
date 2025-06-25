/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    k = k % n; // 회전 범위 조절

    reverse(nums, 0, n - 1); // 전체 배열 뒤집기
    reverse(nums, 0, k - 1); // 앞쪽 부분 뒤집기
    reverse(nums, k, n - 1); // 뒤쪽 부분 뒤집기
};

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(nums, k);
console.log("nums: ", nums);
