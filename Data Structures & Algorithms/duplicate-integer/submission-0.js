class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(new Set(nums).size !== nums.length){
            return true
        }else
        return false
            
    }
}

const newSolution = new Solution()

newSolution.hasDuplicate([1, 2, 3, 3])