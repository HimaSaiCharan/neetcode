class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = new Set();
        const sortedNums = [...nums].sort((a,b) => a - b);

        for(let i = 0; i < sortedNums.length; i++){
            for(let j = i + 1; j < sortedNums.length; j++){
                for(let k = j + 1; k < sortedNums.length; k++){
                    if(sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                        result.add(JSON.stringify([sortedNums[i], sortedNums[j], sortedNums[k]]));
                    }
                }
            }
        }

        return Array.from(result).map(item => JSON.parse(item));
    }
}
