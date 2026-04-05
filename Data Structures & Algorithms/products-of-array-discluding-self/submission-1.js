class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const result = new Array(length);
        const prefixProduct = new Array(length);
        const suffixProduct = new Array(length);

        prefixProduct[0] = 1;
        suffixProduct[length - 1] = 1;
        for (let i = 1; i < length; i++) {
            prefixProduct[i] = nums[i - 1] * prefixProduct[i - 1];
        }
        for (let i = length - 2; i >= 0; i--) {
            suffixProduct[i] = nums[i + 1] * suffixProduct[i + 1];
        }
        for (let i = 0; i < length; i++) {
            result[i] = prefixProduct[i] * suffixProduct[i];
        }
        return result;
    }
}