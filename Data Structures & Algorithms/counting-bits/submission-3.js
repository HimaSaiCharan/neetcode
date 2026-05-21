class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const result = new Array(n + 1).fill(0);

        for(let i = 1; i <= n; i++) {
            let num = i;
            while(num !== 0) {
                result[i]++;
                num &= num - 1;
            }
        }

        return result;
    }
}
