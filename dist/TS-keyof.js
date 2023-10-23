"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let obj = {
    name: "Mayank Yadav",
    age: 34,
    isMarried: false
};
function Intro(object, str) {
    console.log(`${str} = ${object[str]}`);
}
Intro(obj, "name");
Intro(obj, "age");
Intro(obj, "isMarried");
