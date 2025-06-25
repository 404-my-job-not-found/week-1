/**
 * @description 10^4이니까 2중 반복문 쓰면 10^8이니까 시간초과 그러므로 2중 반복문은 쓰면 안됨
 */

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};

const prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
const prices2 = [1, 2, 3, 4, 5];
maxProfit(prices2);
const prices3 = [7, 6, 4, 3, 1];
maxProfit(prices3);
