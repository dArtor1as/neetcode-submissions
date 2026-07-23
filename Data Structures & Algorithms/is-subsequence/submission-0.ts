class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let left1 = 0
        let left2 = 0

        while (left1 < s.length && left2 < t.length){
            if (s[left1] !== t[left2]){
                left2++
            }
            else if (s[left1] === t[left2]){
                left1++
                left2++
            }
        }
        return left1 === s.length;
        
    }
}
