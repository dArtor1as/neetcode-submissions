class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const bracketsMap = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        const stack :string [] = []
        for(let i = 0; i < s.length; i++){
            const char = s[i]
            if(bracketsMap[char]){
                stack.push(char)
            }
            else{
                const lastOpen = stack.pop();
                if (bracketsMap[lastOpen] !== char){
                    return false
                }
            }
        }
         return stack.length === 0
        
    }
}
