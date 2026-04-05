class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const list = new Set(nums);
        let longest = 0;

        for(const num of nums) {
            if(!list.has(num - 1)) {
                let length = 1;

                while(list.has(num + length)) {
                    length++;
                }

                longest = Math.max(length, longest)
            }
        }

        return longest;
    }
}
