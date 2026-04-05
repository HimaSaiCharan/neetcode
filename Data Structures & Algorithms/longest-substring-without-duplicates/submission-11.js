class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(str) {
        let left = 0;
        let result = 0;
        const charSet = new Set(); 

        for(let right = 0;right < str.length; right++) {
            while (charSet.has(str[right])) {
                charSet.delete(str[left]);
                left++;
            }
            
            charSet.add(str[right]);
            result = Math.max(result, right - left + 1);
        }

        return  result;
    }
}
