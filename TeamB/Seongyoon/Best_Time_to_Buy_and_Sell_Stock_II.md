# Best Time to Buy and Sell Stock II

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/)

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

## 번역

가격[i]는 특정 날짜의 주식 가격인 정수 배열 가격이 주어집니다.

매일 주식을 매수 및/또는 매도할 수 있습니다. 한 번에 최대 한 종목의 주식만 보유할 수 있습니다. 그러나 매수한 후 당일에 즉시 매도할 수 있습니다.

달성할 수 있는 최대 수익을 찾아서 반환하세요.

## Example


## 의식의 흐름

### step 1
- 최대 수익 문제..는... 예전에 잠깐 알고리즘 공부할때 그리디 알고리즘 쪽이 그랬던거같음... 그리드알고리즘 먼저 찾아서 확인해보기.
- 그리디 알고리즘이란?
  - 그리디 알고리즘은 지금 당장의 상황에서 가장 최적의 수를 찾는 알고리즘.
  - 그럼 그리디 알고리즘 같이 구현한다면 어떻게 구현해야할까?
  - 그리디 알고리즘은 무조건 당장의 상황에서 가장 최적의 수를 구한다고 했는데... 그러면 주식을 오늘 사서 내일 팔때 이득이면 당장 이득이니까 i > i+1 의 형태일때 팔면 이득일거라 판단하여 구현.

### step 2
- 우여곡절 끝에 통과....
- 그리디 알고리즘의 핵심은 미래를 고민하지말고 당장이 이득을 취하자! 인게 포인트인거 같다.