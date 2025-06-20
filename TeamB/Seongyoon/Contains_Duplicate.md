# Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## 번역

정수 배열 nums가 주어지면 배열에 어떤 값이 두 번 이상 나타나면 참을 반환하고 모든 요소가 고유하면 거짓을 반환합니다.

## Example
```
Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
```

## 의식의 흐름

### step 1
- 중복이 있을때 true 라고 감안하면, for문으로 nums를 순회하면서 해당 순서의 값이 배열에 포함되어 있으면 되지않을까?라고 생각.

### step 2
- 초기 작성 방안은 for문을 이용함.. 근데 솔직히 이게 유용한지 모르겠음..
- 그래서 새로운 방안을 고민하던중 중복을 제거한 배열과 제거하지 않은 배열의 길이를 비교하면 어떨까? 라고 생각함.
- new Set() 을 이용하면 배열의 중복을 제거할 수 있음.
- new Set으로 새로만든 배열과 기존 배열의 길이를 비교하면 좋겠다!