class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const occurances = {};
        for (let i = 0; i < s.length; i++) {
            occurances[s[i]] = (occurances[s[i]] || 0) + 1;
            occurances[t[i]] = (occurances[t[i]] || 0) - 1;
        }

        for (const alphabet in occurances) {
            if (occurances[alphabet] !== 0) return false 
        }

        return true
    }
}
