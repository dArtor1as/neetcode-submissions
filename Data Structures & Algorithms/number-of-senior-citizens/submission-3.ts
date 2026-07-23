class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {

        let oldPeople = 0
        for ( const passanger of details){
            const ageStr = passanger.slice(11,13)
            if(Number(ageStr) > 60){
                 oldPeople++
             }
        }
        
        // for(let i = 0; i < details.length; i++){
        //     const ageStr = details[i][11] + details[i][12]
        //     if(Number(ageStr) > 60){
        //         oldPeople++
        //     }
        // }
        return oldPeople
        
    }
}
