class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {

        let oldPeople = 0
        
        for(let i = 0; i < details.length; i++){
            const ageStr = details[i][11] + details[i][12]
            if(Number(ageStr) > 60){
                oldPeople++
            }
        }
        return oldPeople
        
    }
}
