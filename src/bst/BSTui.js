import _globals_ from "../globals";
import { inorderOnNode } from "./BSTNode";

export function UITreeNode(node) {
    this.node = node;
    this.highlight = false;
    this.updateNodeState();
}

UITreeNode.prototype.updateNodeState = function () {
    let xVal = _globals_.canvasWidth / 2;
    let yVal = _globals_.nodeSpaceY;
    if (this.node.parent !== null) {
        xVal =
            this.node.parent.ui.x +
            (this.node.parent.left === this.node ? -1 : 1) *
                Math.pow(2, this.node.height) *
                _globals_.nodeSpaceX;
        yVal = this.node.parent.ui.y + _globals_.nodeSpaceY;
    }
    this.x = xVal;
    this.y = yVal;
};

UITreeNode.prototype.updateNodeUI = function () {
    _globals_.ctx.globalCompositeOperation = "source-over";
    _globals_.ctx.beginPath();
    _globals_.ctx.fillStyle = "#FFEEEE";
    _globals_.ctx.arc(this.x, this.y, _globals_.nodeRadius, 0, 2 * Math.PI);
    _globals_.ctx.fill();
    _globals_.ctx.textAlign = "center";
    _globals_.ctx.fillStyle = "#FF0000";
    _globals_.ctx.fillText(
        this.node.value,
        this.x,
        this.y,
        _globals_.nodeRadius * 2
    );
    if (this.node.parent !== null) {
        _globals_.ctx.globalCompositeOperation = "destination-over";
        _globals_.ctx.moveTo(this.x, this.y);
        _globals_.ctx.lineTo(this.node.parent.ui.x, this.node.parent.ui.y);
    }
    _globals_.ctx.stroke();
};

UITreeNode.prototype.updateAllStateUIFromNode = function () {
    _globals_.ctx.clearRect(
        0,
        0,
        _globals_.canvasWidth,
        _globals_.canvasHeight
    );
    let stack = [this];
    while (stack.length !== 0) {
        let currentNode = stack.pop();
        if (currentNode.node.left !== null) {
            stack.push(currentNode.node.left.ui);
        }
        if (currentNode.node.right !== null) {
            stack.push(currentNode.node.right.ui);
        }
        currentNode.updateNodeState();
        currentNode.updateNodeUI();
    }
};
