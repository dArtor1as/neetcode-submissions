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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

        if (root === null){
            return false
        }

        function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
            if (root === null && subRoot === null){
                return true
            }
            if (root !== null && subRoot === null || root === null && subRoot !== null ){
                return false
            }
            if(root.val !== subRoot.val){
                return false
            }

            let leftSide = isSameTree(root.left,subRoot.left)
            let rightSide = isSameTree(root.right,subRoot.right)

            let isSame = leftSide && rightSide

            return isSame
        }

        if (isSameTree(root, subRoot)){
            return true
        }
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

    }
}
