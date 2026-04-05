class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = [...nums].sort((a,b) => a - b);
        const count = {}
        for (const num of sortedNums) 
            count[num] = (count[num] || 0) + 1;
        
        const result = [];
        for (let i = 0; i < sortedNums.length; i++) {
            count[sortedNums[i]] = count[sortedNums[i]] - 1;
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            for (let j = i + 1; j < sortedNums.length; j++) {
                count[sortedNums[j]] = count[sortedNums[j]] - 1;
                if(j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

                const target = -(sortedNums[i] + sortedNums[j]);
                if(count[target] > 0) 
                    result.push([sortedNums[i], sortedNums[j], target]);
            }

            for(let j = i + 1; j < nums.length; j++) {
                count[sortedNums[j]] = count[sortedNums[j]] + 1
            }
        }

        return result;
    }
}
