function _inorder(bstNode) {
    if (bstNode == null) {
        return [];
    } else {
        let retArr = [];
        retArr = retArr.concat(_inorder(bstNode.left));
        retArr.push(bstNode.value);
        return retArr.concat(_inorder(bstNode.right));
    }
}

export function inorder(bst) {
    if (bst == null) {
        return [];
    } else {
        return _inorder(bst.root);
    }
}
