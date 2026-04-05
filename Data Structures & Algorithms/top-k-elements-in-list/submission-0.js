class Solution {
    findFrequency(nums) {
        const frequency = {}

        for(const num of nums) {
            frequency[num] = (frequency[num] || 0) + 1;
        }

        return frequency;
    }
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       const frequency = this.findFrequency(nums)

       const arr = Object.entries(frequency).sort((a, b) => b[1] - a[1])

       return arr.slice(0, k).map(pair => pair[0])
    }
}
