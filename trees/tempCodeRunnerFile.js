function TreeNode(val, left = null, right = null){
    this.val = val;
    this.right = right;
    this.left = left
}

class Pair {
    constructor(node, num){
        this.node = node;
        this.num = num;
    }
}

function preInPostTraversal(root){
    if(root === null) return
    let st = []
    st.push(new Pair(root, 1))
    let pre = []
    let inorder = []
    let post =[]
    while(st.length > 0){
        let it = st.pop();
        // Preorder
        if(it.num === 1){
            pre.push(it.node.val)
            it.num++
            st.push(it)
            if(it.node.left !== null){
                st.push(new Pair(it.node.left, 1));
            }
        }else if (it.num === 2){
            inorder.push(it.node.val);
            it.num++
            st.push(it)
            if(it.node.right !== null){
                st.push(new Pair(it.node.right, 1))
            }
        }else{
            post.push(it.node.val)
        }
    }
    // console.log("Preorder : ", pre);
    // console.log("Postorder : ", post);
    // console.log("Inorder : ", inorder);
    return {pre, inorder, post}
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Call function
let result = preInPostTraversal(root);

// Print results
console.log("Preorder:", result.pre);
console.log("Inorder:", result.inorder);
console.log("Postorder:", result.post);