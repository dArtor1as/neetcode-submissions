class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const splitS = s.trim().split(/\s+/)
        // for(let i = 0; i <= splitS.length - 1 ; i++){
        //     if (i === splitS.length -1){
        //         return splitS[i].length
        //     }
        //     else continue
        // }
        const lastIndex = splitS.length - 1

        return splitS[lastIndex].length

    }
}
