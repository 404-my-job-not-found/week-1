// LeetCode 122. Best Time to Buy and Sell Stock II
// LeetCode Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// TypeScript Solution

function maxProfit(prices: number[]): number {
	let profit = 0

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			profit += prices[i] - prices[i - 1]
		}
	}

	return profit
}
