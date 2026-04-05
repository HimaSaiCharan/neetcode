class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
        let left = 0;
        let result = 0;
        const map = {};

        for(let right = 0;right < str.length;right++) {
            if(map[str[right]] >= 0) {
                left = Math.max(map[str[right]] + 1, left)
            }
             map[str[right]] = right;
             result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
