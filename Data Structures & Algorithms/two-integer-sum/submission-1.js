class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numberToIndexMap = {};

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(diff in numberToIndexMap)  return [numberToIndexMap[diff], i]
            numberToIndexMap[nums[i]] = i;
        }
        return []
    }
}
