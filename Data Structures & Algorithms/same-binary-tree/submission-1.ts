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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        let queue = [[p, q]];

        while (queue.length > 0) {
            let[nodeP, nodeQ] = queue.shift()

            if (nodeP === null && nodeQ === null) {
                continue
            }
            if ((nodeP === null && nodeQ !== null) || (nodeP !== null && nodeQ === null)) {
                return false;
            }
            if (nodeP.val !== nodeQ.val) {
                return false;
            }

            queue.push([nodeP.left, nodeQ.left]);
            queue.push([nodeP.right, nodeQ.right]);
        }

        return true;

        // let leftSide = this.isSameTree(p.left, q.left);
        // let rightSide = this.isSameTree(p.right, q.right);

        // let result = leftSide && rightSide;

        // return result;
    }
}
