// input - prices: number[]
// output - max profit: number

// 어느날 사서 그보다 더 비싸게 파는게 중요

function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 현재 가격과 이전 가격 비교
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}
