function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 0) {
    return false; // 빈 배열인 경우 중복이 없으므로 false 반환
  }

  // Set을 사용하여 중복 요소를 추적
  const duplicateNums = new Set<number>();
  for (const num of nums) {
    // Set에 이미 존재하는 요소인지 확인
    if (duplicateNums.has(num)) {
      return true; // 중복된 요소가 발견되면 true 반환
    }
    duplicateNums.add(num); // Set에 현재 요소를 추가
  }

  return false;
}
