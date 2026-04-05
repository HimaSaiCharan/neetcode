class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    alphaNum(char) {
        return (
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(str) {
        let left = 0;
        let right = str.length - 1

        while(left < right) {
            while(left < right && !this.alphaNum(str[left])) left++;
            while(left < right && !this.alphaNum(str[right])) right--;

            if(str[left].toLowerCase() !== str[right].toLowerCase()) return false;

            left++;
            right--;
        }

        return true;
    }
}
