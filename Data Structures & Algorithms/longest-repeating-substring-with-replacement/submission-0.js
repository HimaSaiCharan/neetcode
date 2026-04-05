class Solution {
    /**
     * @param {string} str
     * @param {number} k
     * @return {number}
     */
    characterReplacement(str, k) {
        let count = new Map();
        let result = 0;

        let left = 0;
        let maxf = 0;
        
        for (let right = 0; right < str.length; right++) {
            count.set(str[right], (count.get(str[right]) || 0) + 1);
            maxf = Math.max(maxf, count.get(str[right]));

            while (right - left + 1 - maxf > k) {
                count.set(str[left], count.get(str[left]) - 1);
                left++;
            }
            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}