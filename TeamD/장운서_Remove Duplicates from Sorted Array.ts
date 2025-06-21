// LeetCode Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// TypeScript Solution
function removeDuplicates(nums: number[]): number {
	let i = 0
	for (let j = 1; j < nums.length; j++) {
		if (nums[j] !== nums[i]) {
			i++
			nums[i] = nums[j]
		}
	}
	return i + 1
}

// Example usage:
const nums = [1, 1, 2, 2, 3]
const newLength = removeDuplicates(nums)
console.log(newLength) // Output: 3
console.log(nums.slice(0, newLength)) // Output: [1, 2, 3]

// Explanation:
// 처음에 filter 와 indexOf를 사용하여 중복을 제거하려고 했지만, remove the duplicates in-place such that each unique element appears only once. 즉, 중복을 제거하면서 새 배열로 반환하면 안되고 그대로 제거해야 된다 라고 해석해서
// for문을 사용하여 중복을 제거하는 방법으로 변경했습니다.
