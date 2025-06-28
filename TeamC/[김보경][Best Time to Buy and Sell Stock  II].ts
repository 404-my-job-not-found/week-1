// input - prices: number[]
// output - max profit: number

// 어느날 사서 그보다 더 비싸게 파는게 중요

function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 만약 오늘 가격이 어제 가격보다 비싸면
    if (prices[i] > prices[i - 1]) {
      // 오늘 가격에서 어제 가격을 뺀 만큼 이익을 더한다
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
}
