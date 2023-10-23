"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let num;
num = "It is a string";
console.log(typeof num);
num = 23;
console.log(typeof num);
function NeverBlocked(err) {
    throw new Error(err);
}
try {
    NeverBlocked("Never Block Call");
}
catch (err) {
    console.log("\n" + err.message + "\n");
}
let unk = "unknown";
let y = 34;
unk = y;
console.log(unk);
function fun() {
}
console.log(fun());
let un = undefined;
console.log(typeof un);
let nu = null;
console.log(typeof nu);
