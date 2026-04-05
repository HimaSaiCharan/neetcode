class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checked = new Set()
        
        for(const num of nums){
            if(checked.has(num)) return true;

            checked.add(num)
        }

        return false;
    }
}
