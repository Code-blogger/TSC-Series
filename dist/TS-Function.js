"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
function Name(firstName, lastName) {
    if (typeof lastName === "undefined")
        return firstName;
    return firstName + ' ' + lastName;
}
const Age = (age) => { console.log("Age: " + age); return 0; };
function Mydetails(firstName, lastName, age = 0, isMarried) {
    console.log("My Name: " + Name(firstName, lastName));
    Age(age);
    if (!(typeof isMarried === 'undefined')) {
        console.log("IsMarried: " + isMarried + "\n");
    }
}
Mydetails("Mayank", "Yadav", 23, true);
Mydetails("Rishabh", "Panchal", 25);
function asCallback(callbacks, firstName, lastName) {
    if (typeof lastName === "undefined")
        return callbacks(firstName);
    return callbacks(firstName, lastName);
}
console.log(`\n${asCallback(Name, "Piyush", "Patel")}`);
console.log(`\n${asCallback(Name, "Hitesh Sahu")}`);
