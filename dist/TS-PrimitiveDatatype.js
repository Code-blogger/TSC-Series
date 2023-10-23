"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
function myDetail(name, age, isMarried) {
    console.log("Full Name: " + name);
    console.log("Age: " + age);
    console.log("Married: " + isMarried);
}
let Name = "Mayank";
console.log("First Name: " + Name);
Name = "Mayank Yadav";
let age = 23;
let isMarried = false;
myDetail(Name, age, isMarried);
