class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0)
        let stack: number [] = []
        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length -1 ]]){
                let prevIndex = stack.pop()
                let daysWaited = i - prevIndex
                result[prevIndex] = daysWaited
            }
            stack.push(i);
        }
        return result
    }
}
