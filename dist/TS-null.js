"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let obj = {
    name: "Mayank Yadav",
    isMarried: false
};
console.log((obj === null || obj === void 0 ? void 0 : obj.name) + "\n");
function INTRO(name, key) {
    var _a;
    console.log(`${key}: ${(_a = name[key]) !== null && _a !== void 0 ? _a : "Not Unavaliable"}`);
}
INTRO(obj, "name");
INTRO(obj, "age");
INTRO(obj, "isMarried");
function IsAge(age) {
    console.log(`My Age: ${age}`);
}
IsAge(obj.age);
