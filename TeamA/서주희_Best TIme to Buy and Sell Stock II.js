var maxProfit = function (prices) {
  const length = prices.length;
  let result = 0;

  for (let i = 0; i < length - 1; i++) {
    if (prices[i] <= prices[i + 1]) {
      result += prices[i + 1] - prices[i];
    }
  }

  return result;
};
