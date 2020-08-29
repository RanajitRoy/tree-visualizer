function BSTNode(val, parentNode) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = parentNode;
    this.height = null;
}

BSTNode.prototype.getDescendantSuccessor = function () {
    let temp;
    if (this.right !== null) {
        temp = this.right;
        while (temp.left !== null) {
            temp = temp.left;
        }
        return temp;
    }
    return null;
};

//################ NOT CALLED ##################
BSTNode.prototype.hasSibling = function () {
    if (this.parent !== null) {
        return this.parent.left !== null && this.parent.right !== null;
    }
    return false;
};

export default BSTNode;
