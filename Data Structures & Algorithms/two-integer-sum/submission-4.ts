class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
    let seen = new Map<number,number>()
    for(let i = 0; i < nums.length; i++){
        
        const currentVal = nums[i];
        const complement = target - currentVal
    if(seen.has(complement)){
        const prevIndex = seen.get(complement)
        return [prevIndex,i]
    }
    seen.set(nums[i],i);
        
    }
    return [-1,-1]
    }
}
