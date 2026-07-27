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
    maxDepth(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }

        let leftMax = this.maxDepth(root.left);

        let rightMax = this.maxDepth(root.right);

        let treeMax = Math.max(leftMax, rightMax);

        return treeMax + 1;
    }
}
