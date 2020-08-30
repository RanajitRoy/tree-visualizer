"use strict";

import _globals_ from "./globals";
import BSTree from "./bst/BSTree";
import { inorderOnNode } from "./bst/BSTTraversals";

let canvasDiv = document.getElementById("canvasDiv");
_globals_.canvasWidth = parseFloat(
    window.getComputedStyle(canvasDiv).getPropertyValue("width")
);
_globals_.canvasHeight = parseFloat(
    window.getComputedStyle(canvasDiv).getPropertyValue("height")
);

let canvas = document.getElementById("canvas");
canvas.height = _globals_.canvasHeight;
canvas.width = _globals_.canvasWidth;
_globals_.ctx = canvas.getContext("2d");

window.addEventListener("resize", function () {
    canvas.width = 0;
    canvas.height = 0;

    _globals_.canvasWidth = parseFloat(
        window.getComputedStyle(canvasDiv).getPropertyValue("width")
    );
    _globals_.canvasHeight = parseFloat(
        window.getComputedStyle(canvasDiv).getPropertyValue("height")
    );

    canvas.height = _globals_.canvasHeight;
    canvas.width = _globals_.canvasWidth;

    _globals_.tree.updateAllNodeUI();
});

let bst = null;
_globals_.tree = bst = new BSTree();

let insertText = document.getElementById("insText");
let deleteText = document.getElementById("delText");
let insertButton = document.getElementById("insButton");
let deleteButton = document.getElementById("delButton");

insertButton.addEventListener("click", function (event) {
    event.target.disabled = true;
    let value = parseInt(insertText.value);
    if (!isNaN(value) && value > -10000 && value < 10000) {
        bst.insert(value);
        bst.updateAllNodeUI();
    }

    event.target.disabled = false;
});

deleteButton.addEventListener("click", function (event) {
    event.target.disabled = true;
    let value = parseInt(deleteText.value);
    if (!isNaN(value) && value > -10000 && value < 10000) {
        bst.delete(value);
        bst.updateAllNodeUI();
    }
    event.target.disabled = false;
});

// bst.insert(60);
// bst.insert(201);
// bst.insert(22);
// bst.insert(100);
// bst.insert(20);
// bst.insert(10);
// bst.insert(25);

// bst.insert(21);
// bst.insert(23);
// bst.insert(26);

// console.log(bst);

// let listNode = inorderOnNode(bst.root);

// console.log(bst.search(25));
// console.log(bst.search(11));
// console.log(bst.search(22));
// console.log(bst.search(60));
// console.log(bst.search(100));

// console.log("delete ", bst.delete(23));
// console.log("delete ", bst.delete(22));
// console.log("delete ", bst.delete(60));
// console.log(inorder(bst));
// console.log("delete ", bst.delete(10));
// console.log(inorder(bst));
// console.log("delete ", bst.delete(100));
// console.log(inorder(bst));
