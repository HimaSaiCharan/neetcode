class Solution {
    findFrequency(str) {
        const frequency = new Array(26).fill(0);

        for(const char of str) frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        
        return frequency.join(',');
    }

    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedAnagrams = {}

        for(const str of strs) {
            const frequency = this.findFrequency(str);

            if(!(frequency in groupedAnagrams))  groupedAnagrams[frequency] = []
            
            groupedAnagrams[frequency].push(str)
        }

        return Object.values(groupedAnagrams)
    }
}
