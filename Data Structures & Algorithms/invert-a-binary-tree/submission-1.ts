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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        
        if (root === null){
            return null
        }

        let queue = [root]
        
        while(queue.length > 0){
            let current = queue.shift()
            let temp = current.left
            current.left = current.right
            current.right = temp

            if(current.left !== null){
                queue.push(current.left)
            }
            if(current.right !== null){
                queue.push(current.right)
            }
            
        }
        return root

        // if (root === null){
        //     return null
        // }
        // let temp = root.left
        // root.left = root.right
        // root.right = temp

        // this.invertTree(root.left)
        // this.invertTree(root.right)

        // return root



    }
}
