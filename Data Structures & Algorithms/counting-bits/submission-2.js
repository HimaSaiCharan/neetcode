class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const output = [];

        for (let num = 0; num <= n; num++) {
            let ones = 0;
            for (let i = 0; i < 32; i++) {
                if((num & (1 << i)) != 0) ones++;
            }

            output.push(ones);
        }

        return output;
    }
}
