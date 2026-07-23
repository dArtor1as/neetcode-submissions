class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length      
    }
}

const newSolution = new Solution()

newSolution.hasDuplicate([1, 2, 3, 3])