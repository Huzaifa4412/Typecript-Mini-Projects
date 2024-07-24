"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function reverse() {
    var name = prompt("Enter your name  : ").toLowerCase();
    var reverse = "";
    for (var i = name.length - 1; i >= 0; i--) {
        reverse = reverse + name[i];
    }
    reverse[0].toUpperCase();
    console.log(reverse);
}
reverse();
