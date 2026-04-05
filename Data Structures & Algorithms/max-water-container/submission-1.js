class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxCapacity = 0;

        while(left < right) {
            const width = right - left;
            const currentCapacity = width * Math.min(heights[left], heights[right]);

            maxCapacity = Math.max(currentCapacity, maxCapacity);

            if(heights[left] <= heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxCapacity;
    }
}
