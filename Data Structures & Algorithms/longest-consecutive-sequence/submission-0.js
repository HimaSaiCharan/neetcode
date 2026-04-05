class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const list = new Set(nums)
        let result = 0;

        for(const num of nums) {
            let currentNumber = num;
            let streak = 0;

            while (list.has(currentNumber)) {
                currentNumber++;
                streak++;
            }

        result = Math.max(result, streak)
        }

        return result
    }
}