// input nums: number[],
// output: boolean

function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// 그런데 위와 같은 방식은 시간복잡도가 O(n^2)로 비효율적이다.
// Set을 이용하면 시간복잡도를 O(n)으로 줄일 수 있다.

function containsDuplicate2(nums: number[]): boolean {
  const numberSet = new Set<number>();

  for (const num of nums) {
    if (numberSet.has(num)) {
      return true;
    }
    numberSet.add(num);
  }

  return false;
}
