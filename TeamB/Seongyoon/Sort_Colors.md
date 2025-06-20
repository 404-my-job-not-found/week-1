# Sort Colors
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

## 번역
빨강, 흰색, 파랑 색의 객체가 n개인 배열이 주어졌을 때, 같은 색의 객체가 빨강, 흰색, 파랑 순서로 인접하도록 제자리에서 정렬합니다.

정수 0, 1, 2를 사용하여 각각 빨간색, 흰색, 파란색을 나타냅니다.

라이브러리의 정렬 함수를 사용하지 않고 이 문제를 풀어야 합니다.

## Example
```
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
```

## 의식의 흐름

### step 1
- 0,1,2 가 색상을 나타낸다는건 크게 의미가 없다고 생각.
- 제자리 알고리즘이기에 기존 배열을 손대야함.
- 기존 배열을 0 1 2 순으로 오름차순으로 바꾸는 문제.
- 제자리 알고리즘으로 기존배열을 오름차순으로 정리하는 법을 고민해보고 안되면 찾아보자..

### step 2
- 정렬에 대해 검색해보던 중 2중 for문으로 i 와 i+1 인덱스를 비교하고 교환하는 정렬(버블정렬)을 사용하면 어떨까 생각.
- 버블정렬은 시간복잡도가 O(n^2) 여서 너무 시간이 오래걸린다고함...
- 다른 정렬에 대한 조사 시작

### step 3
- Array.sort()를 사용하면 안되는줄 알았는데 딱히 상관없는거같다..! 
- 내장함수라서 문제의 마지막줄에 라이브러리의 정렬함수를 쓰지 말라는 말에 위배되지 않는거같다.
- ~~sort() 를 이용해도 된다니 너무 좋다...~~

### step 4
- 자료를 조사해보니 삽입정렬, 퀵정렬도 있다고 한다...
- 정렬에 대한 공부가 더 필요할 꺼 같다.
