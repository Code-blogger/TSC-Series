"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
const Name = (firstName, lastName) => {
    return firstName + ' ' + lastName;
};
function Mydetails(firstName, lastName, age = 0, isMarried) {
    console.log("My Name: " + Name(firstName, lastName));
    console.log("Age: " + age);
    if (!(typeof isMarried === 'undefined')) {
        console.log("IsMarried: " + isMarried + "\n");
    }
}
Mydetails("Mayank", "Yadav", 23, true);
Mydetails("Rishabh", "Panchal", 25);
