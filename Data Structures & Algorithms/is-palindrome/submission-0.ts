class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let splitedString = s
            .toLowerCase()
            .split("")
            .join("")
            .replace(/[^a-zA-Z0-9]/g, "");
        let revSplitedString = s
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
            .replace(/[^a-zA-Z0-9]/g, "");
        // let right = splitedString.length - 1
        // for(let i = 0; i < splitedString.length; i++){
        //     let left1 = splitedString[i]
        //     let left2 = revSplitedString[i]
        //     if( splitedString.length !== revSplitedString.length ){
        //         return false
        //     }
        //     if(left1 == left2){
        //      continue
        //     }else if(splitedString === revSplitedString){
        //         return true
        //     }
        //         return false
        // }
        if (splitedString === revSplitedString) {
            return true;
        } else return false;
    }
}
