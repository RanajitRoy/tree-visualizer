"use strict";

import BSTree from "./bst/BSTree";
import { inorder } from "./bst/BSTTraversals";

var bst = new BSTree();

bst.insert(60);
bst.insert(201);
bst.insert(22);
bst.insert(100);
bst.insert(20);
bst.insert(10);
bst.insert(25);

console.log(bst);

console.log(inorder(bst));

console.log(bst.search(25));
console.log(bst.search(11));
console.log(bst.search(22));
console.log(bst.search(60));
console.log(bst.search(100));

console.log("delete ", bst.delete(23));
console.log("delete ", bst.delete(22));
console.log("delete ", bst.delete(60));
console.log(inorder(bst));
console.log("delete ", bst.delete(10));
console.log(inorder(bst));
console.log("delete ", bst.delete(100));
console.log(inorder(bst));

var canvas = document.querySelector("canvas");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

console.log(canvasWidth, canvasHeight);
console.log(canvas);

var ctx = canvas.getContext("2d");

ctx.fillRect(20, 20, 50, 50);
