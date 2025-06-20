# Rotate_Array

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/)

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

## 번역

정수 배열 n이 주어지면 배열을 오른쪽으로 k 단계씩 회전합니다(여기서 k는 음수가 아닌 값).

## Example

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

## 의식의 흐름

### step 1
- nums를 역순으로 k번 만큼 순회해서 Pop과 Unshift를 이용하면 되지않을까..?
- push()는 가장 끝에 값을 추가한다.
- pop()은 가장 끝 값을 제거한다.
- unshift()는 가장 앞에 값을 추가한다.
- shift()는 가장 앞의 값을 제거한다.

### step 2
- 이친구는 생각보다 굉장히 쉬운.. JS여서그런가? pop과 unshift로 너무 쉽게 구현에 성공한거같다.