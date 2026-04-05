class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(brackets) {
        const stack = [];
        const closeToOpenBracketsMap = {
            ")" : "(",
            "]" : "[",
            "}" : "{"
        };

        for(const bracket of brackets) {
            if(closeToOpenBracketsMap[bracket]) {
                if(stack[stack.length - 1] === closeToOpenBracketsMap[bracket]) 
                    stack.pop();
                else
                    return false;
            } else {
            stack.push(bracket);
            }
        }

        return stack.length === 0;
    }
}
