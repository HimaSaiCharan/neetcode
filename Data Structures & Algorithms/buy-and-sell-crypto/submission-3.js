class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for(const sell of prices) {
            maxProfit = Math.max(maxProfit, sell - minPrice);
            minPrice = Math.min(minPrice, sell);
        }

        return maxProfit;
    }
}
