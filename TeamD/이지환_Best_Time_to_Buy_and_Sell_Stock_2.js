/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 0;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        // 이때 매수를 해야 됨. 다음 날보다 저점이라서.
        if (prices[i] < prices[i + 1]) {
            buy = prices[i];
            console.log("매수" + i + ": ", buy);
        }
        // 이때 매도를 해야 됨. 다음 날보다 고점이라서.
        if (prices[i] > prices[i + 1] && buy !== 0) {
            sell = prices[i] - buy;
            profit += sell;
            buy = 0;
            console.log("매도" + i + ": ", sell);
        }
    }
    return profit;
};
const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1, 1, 2, 2, 3];
// const prices = [1, 2, 3, 4, 5];

console.log("수익: ", maxProfit(prices));
