/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length === 0 || k <= 0) {
    return; // 배열이 비어있거나 k가 0 이하인 경우 아무 작업도 하지 않음
  }

  for (let i = 0; i < k; i++) {
    // ex) k가 3이라면 3번 반복
    // 배열의 마지막 요소를 제거하고, 그 요소를 배열의 맨 앞에 삽입
    // ex) [1, 2, 3, 4, 5] // 3번 반복
    // 1. [1, 2, 3, 4] -> 5
    // 2. [5, 1, 2, 3] -> 4
    // 3. [4, 5, 1, 2] -> 3
    // 4. [3, 4, 5, 1, 2]
    // 마지막 요소를 배열의 맨 앞에 삽입
    nums.unshift(nums.pop()!);
  }
}
