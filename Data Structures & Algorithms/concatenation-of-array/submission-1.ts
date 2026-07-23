class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let secondNums = nums
        
       return [...nums,...secondNums]

    }
}
