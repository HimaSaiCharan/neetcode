class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxPrice = 0;

        for(let i = 0;i < prices.length;i++) {
            const buyPrice = prices[i];

            for(let j = i + 1;j < prices.length;j++) {
                const sellPrice = prices[j];
                maxPrice = Math.max(maxPrice, sellPrice - buyPrice);
            }
        }

        return maxPrice;
    }
}
