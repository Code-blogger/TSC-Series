"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let array = ["sfbdf"];
array.push("jnkr");
console.log(array);
let num = [54, 46, 78];
console.log(num);
console.log(num.pop());
console.log(num);
console.log(num.length);
let arr = ["Mayank", 343.4, 454, "gfhd"];
console.log(`\n${arr.join(" -- ")}`);
let a = [3, 87, 23, 75, 35, 8];
a.forEach((a) => {
    console.log(++a);
});
