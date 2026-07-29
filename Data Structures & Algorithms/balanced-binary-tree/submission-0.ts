/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        let isBalanced = true

        function maxDepth(root: TreeNode | null): number{

            if(root === null){
                return 0
            }
        
            let leftMax = maxDepth(root.left)
            let rightMax = maxDepth(root.right)

            let diff = Math.abs(leftMax - rightMax)

            let maximDepth =Math.max(leftMax,rightMax)

            if(diff >1){
                isBalanced = false
            }

            return maximDepth + 1
        }

        maxDepth(root)

        return isBalanced

    }
}
