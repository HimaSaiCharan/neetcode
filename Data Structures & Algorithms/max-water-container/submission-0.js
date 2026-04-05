class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxCapacity = 0;

        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++){
                const width = j - i;
                const currentCapacity = width * Math.min(heights[i], heights[j]);

                maxCapacity = Math.max(maxCapacity, currentCapacity);
            }
        }

        return maxCapacity;
    }
}
