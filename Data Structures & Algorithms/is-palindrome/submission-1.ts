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
        // let revSplitedString = s
        //     .toLowerCase()
        //     .split("")
        //     .join("")
        //     .replace(/[^a-zA-Z0-9]/g, "");
        let left = 0;
        let right = splitedString.length - 1
        while (left < right){
            if (splitedString[left] == splitedString[right]){
                left++
                right--
            }else if(splitedString[left] !== splitedString[right]){
                return false
            }
        }
        return true
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
        // if (splitedString === revSplitedString) {
        //     return true;
        // } else return false;
    }
}
