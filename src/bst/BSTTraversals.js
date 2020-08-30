export function inorderOnNode(bstNode) {
    if (bstNode == null) {
        return [];
    } else {
        let retArr = [];
        retArr = retArr.concat(inorderOnNode(bstNode.left));
        retArr.push(bstNode);
        return retArr.concat(inorderOnNode(bstNode.right));
    }
}

export function inorder(bst) {
    if (bst == null) {
        return [];
    } else {
        return inorderOnNode(bst.root);
    }
}
