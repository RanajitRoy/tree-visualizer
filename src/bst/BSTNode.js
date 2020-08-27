function BSTNode(val, parentNode) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = parentNode;
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
    if (this.left !== null) {
        temp = this.left;
        if (temp.right !== null) {
            temp = temp.right;
        }
        return temp;
    }
    return null;
};

export default BSTNode;
