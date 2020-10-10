"use strict";

import _globals_ from "./globals";
import BSTree from "./bst/BSTree";
import { inorderOnNode } from "./bst/BSTTraversals";

let canvasDiv = document.getElementById("canvasDiv");

let canvas = document.getElementById("canvas");
let canvasDivStyle = window.getComputedStyle(canvasDiv);
_globals_.ctx = canvas.getContext("2d");

function updateCanvasSize() {
    _globals_.canvasWidth = parseFloat(
        canvasDivStyle.getPropertyValue("width")
    );
    _globals_.canvasHeight = parseFloat(
        canvasDivStyle.getPropertyValue("height")
    );
    canvas.height = _globals_.canvasHeight;
    canvas.width = _globals_.canvasWidth;
}

window.addEventListener("resize", function () {
    canvas.width = 0;
    canvas.height = 0;

    updateCanvasSize();

    _globals_.updateUI();
});

let insertText = document.getElementById("insText");
let deleteText = document.getElementById("delText");
let insertButton = document.getElementById("insButton");
let deleteButton = document.getElementById("delButton");

insertButton.addEventListener("click", function (event) {
    event.target.disabled = true;
    let value = parseInt(insertText.value);
    if (!isNaN(value) && value > -10000 && value < 10000) {
        _globals_.tree.insert(value);
        _globals_.updateUI();
    }

    event.target.disabled = false;
});

deleteButton.addEventListener("click", function (event) {
    event.target.disabled = true;
    let value = parseInt(deleteText.value);
    if (!isNaN(value) && value > -10000 && value < 10000) {
        _globals_.tree.delete(value);
        _globals_.updateUI();
    }
    event.target.disabled = false;
});

let variable = document.getElementById("variable");
let homevariable = document.getElementById("homevariable");

let logo = document.getElementById("logoheader");
logo.addEventListener("click", function (event) {
    _globals_.tree = null;
    _globals_.updateUIHook = null;
    variable.className = "variableNone";
    homevariable.className = "homeVariable";
});

let bstNav = document.getElementById("bstnav");
let bstHome = document.getElementById("bsthome");
let bstHandler = function (event) {
    _globals_.tree = new BSTree();
    _globals_.updateUIHook = _globals_.tree.updateAllNodeUI.bind(
        _globals_.tree
    );
    variable.className = "variable";
    homevariable.className = "homeVariableNone";

    updateCanvasSize();
};
bstNav.addEventListener("click", bstHandler);
bstHome.addEventListener("click", bstHandler);

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
