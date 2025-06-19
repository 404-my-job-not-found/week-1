# Remove Duplicates from Sorted Array

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/)

Given an integer array nums sorted in non-decreasing order, remove the duplicates **in-place** such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

Constraints:

- 1 <= nums.length <= 3 \* 104
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order.

## 번역

정수 배열의 숫자가 감소하지 않는 순서로 정렬되어 있을 때, 각 고유 요소가 한 번만 나타나도록 중복된 요소를 **제자리**에서 제거합니다. 요소의 상대적 순서는 동일하게 유지해야 합니다. 그런 다음 고유 요소의 수를 숫자로 반환합니다.

nums의 고유 요소 수를 k라고 가정하면 다음과 같은 작업을 수행해야 합니다:

nums의 첫 번째 k 요소에 처음에 nums에 있던 순서대로 고유 요소가 포함되도록 배열 nums를 변경합니다. nums의 나머지 요소는 nums의 크기만큼 중요하지 않습니다.
k를 반환합니다.

사용자 지정 심사위원:

심사위원은 다음 코드를 사용하여 솔루션을 테스트합니다:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

모든 어설션이 통과되면 솔루션이 수락됩니다.

제약 조건:

- 1 <= nums.length <= 3 \* 104
- -100 <= nums[i] <= 100
- nums는 내림차순이 아닌 순서로 정렬됩니다.

## 의식의 흐름

### step 1
- non-decreasing order는 오름차순이라는 뜻.
- 이미 정렬이 되어있기때문에, 첫번째 숫자를 어떠한 값에 담고, 그 값이 나오면 배열에서 그 값을 

### step 2
- 문제 이해를 잘못함.. output의 예시를 보고 k, output = [...] 이런식으로 나와야하는줄 알았는데 그게 아니였음.
- output만 나오면 되고, _도 필요없음.
- 새로운 배열 하나를 만들어서 체크값과 같으면 pass, 다르면 push해서 단 한번씩만 push하게 작업

### step 3
- 결과가 중복을 제거하는거면.. new Set 사용하면 어떨지?

### step 4
- 제자리 방식을 사용해야하기때문에 new Set = 얕은복사, 즉 기존 배열을 수정하지않음.
- 기존 배열을 직접 수정해야하기때문에 위와같은 방식은 사용할수없음.