/**
 * @param {number[]} prices
 * @return {number}
 */

const input = [7, 1, 5, 3, 6, 4];

const maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

result = maxProfit(input);

console.log(result);
