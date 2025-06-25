function maxProfit(prices: number[]): number {
  if (prices.length === 0) {
    return 0; // 빈 배열인 경우 0 반환
  }

  let totalProfit = 0; // 총 이익을 저장할 변수
  for (let i = 1; i < prices.length; i++) {
    // ex) prices = [7, 1, 5, 3, 6, 4]
    // 현재 가격이 이전 가격보다 높으면 이익을 계산
    // ex) prices[1] = 1, prices[2] = 5
    // 이익 = prices[2] - prices[1] = 5 - 1 = 4
    // 이익을 총 이익에 더함
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }

  return totalProfit; // 총 이익 반환
}
