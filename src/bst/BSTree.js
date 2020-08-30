import _globals_ from "../globals";
import BSTNode from "./BSTNode";
import { UITreeNode } from "./BSTui";

function updateHeights(node) {
    if (node === null) {
        return -1;
    }
    node.height =
        Math.max(updateHeights(node.left), updateHeights(node.right)) + 1;
    return node.height;
}

function BSTree() {
    this.root = null;
}

BSTree.prototype.insert = function (val) {
    if (this.root === null) {
        this.root = new BSTNode(val, null);
        updateHeights(this.root);
        this.root.ui = new UITreeNode(this.root);
    } else {
        let temp = this.root;
        while (true) {
            if (val >= temp.value) {
                if (temp.right === null) {
                    temp.right = new BSTNode(val, temp);
                    updateHeights(this.root);
                    temp.right.ui = new UITreeNode(temp.right);
                    return;
                } else {
                    temp = temp.right;
                }
            } else {
                if (temp.left === null) {
                    temp.left = new BSTNode(val, temp);
                    updateHeights(this.root);
                    temp.left.ui = new UITreeNode(temp.left);
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

    updateHeights(this.root);
    return deleteNode;
};

BSTree.prototype.updateAllNodeUI = function () {
    if (this.root !== null) {
        this.root.ui.updateAllStateUIFromNode();
    } else {
        _globals_.ctx.clearRect(
            0,
            0,
            _globals_.canvasWidth,
            _globals_.canvasHeight
        );
    }
};

export default BSTree;
