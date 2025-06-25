function removeDuplicates(nums: number[]): number {
  // 배열이 비어있는 경우 0을 반환
  if (nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    // 0번째 index부터 시작해서 다음 요소와 비교
    if (nums[i] === nums[i + 1]) {
      // splice를 사용하여 중복 요소를 제거
      nums.splice(i, 1);
      i--; // 중복 요소를 제거했으므로 인덱스를 하나 줄여서 다음 요소를 비교
    }
  }

  return nums.length;
}
