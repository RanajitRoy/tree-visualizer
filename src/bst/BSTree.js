import BSTNode from "./BSTNode";

function BSTree() {
    this.root = null;
}

BSTree.prototype.insert = function (val) {
    if (this.root === null) {
        this.root = new BSTNode(val, null);
    } else {
        let temp = this.root;
        while (true) {
            if (val >= temp.value) {
                if (temp.right === null) {
                    temp.right = new BSTNode(val, temp);
                    return;
                } else {
                    temp = temp.right;
                }
            } else {
                if (temp.left === null) {
                    temp.left = new BSTNode(val, temp);
                    return;
                } else {
                    temp = temp.left;
                }
            }
        }
    }
};

BSTree.prototype.search = function (key) {
    let temp = this.root;
    while (temp !== null) {
        if (temp.value === key) {
            return temp;
        }
        if (key > temp.value) {
            temp = temp.right;
        } else {
            temp = temp.left;
        }
    }
    return null;
};

BSTree.prototype.delete = function (key) {
    let deleteNode = this.search(key);
    if (deleteNode === null) {
        return null;
    }
    // none
    if (deleteNode.left === null && deleteNode.right === null) {
        let parent = deleteNode.parent;
        if (parent === null) {
            this.root = null;
        } else if (parent.left === deleteNode) {
            parent.left = null;
        } else {
            parent.right = null;
        }
    }

    // left
    if (deleteNode.left !== null && deleteNode.right === null) {
        let parent = deleteNode.parent;
        if (parent === null) {
            this.root = deleteNode.left;
            this.root.parent = null;
        } else if (parent.left === deleteNode) {
            parent.left = deleteNode.left;
            deleteNode.left.parent = parent;
        } else {
            parent.right = deleteNode.left;
            deleteNode.left.parent = parent;
        }
    }

    // right
    if (deleteNode.left === null && deleteNode.right !== null) {
        let parent = deleteNode.parent;
        if (parent === null) {
            this.root = deleteNode.right;
            this.root.parent = null;
        } else if (parent.left === deleteNode) {
            parent.left = deleteNode.right;
            deleteNode.right.parent = parent;
        } else {
            parent.right = deleteNode.right;
            deleteNode.right.parent = parent;
        }
    }

    // left right
    if (deleteNode.left !== null && deleteNode.right !== null) {
        let replacement = deleteNode.getDescendantSuccessor();
        this.delete(replacement.value);
        let parent = deleteNode.parent;
        if (parent === null) {
            // replacement left child connections
            replacement.left = this.root.left;
            replacement.left && (replacement.left.parent = replacement);

            // replacement right child connections
            replacement.right = this.root.right;
            replacement.right && (replacement.right.parent = replacement);

            // Tree connections
            replacement.parent = null;
            this.root = replacement;
        } else if (parent.left === deleteNode) {
            // replacement left child connections
            replacement.left = deleteNode.left;
            replacement.left && (replacement.left.parent = replacement);

            // replacement right child connections
            replacement.right = deleteNode.right;
            replacement.right && (replacement.right.parent = replacement);

            // parent connections
            replacement.parent = parent;
            parent.left = replacement;
        } else {
            // replacement left child connections
            replacement.left = deleteNode.left;
            replacement.left && (replacement.left.parent = replacement);

            // replacement right child connections
            replacement.right = deleteNode.right;
            replacement.right && (replacement.right.parent = replacement);

            // parent connections
            replacement.parent = parent;
            parent.right = replacement;
        }
    }

    return deleteNode;
};

export default BSTree;
