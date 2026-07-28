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
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        function getMaxDepth(root: TreeNode | null): number {
            if (root === null) {
                return 0;
            }

            let leftMax = getMaxDepth(root.left);

            let rightMax = getMaxDepth(root.right);

            diameter = Math.max(diameter, leftMax + rightMax);

            let maxDepth = Math.max(leftMax, rightMax);

            return maxDepth + 1;
        }
        getMaxDepth(root);

        return diameter;
    }
}
