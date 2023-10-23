"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let Person;
Person = ["Mayank Yadav", 23, "+91-34342"];
Person.forEach((per, index) => console.log(per + ": " + index));
Person = ["Mayank Yadav", 23, 9134342];
Person.forEach((per, index) => console.log(per + ": " + index));
