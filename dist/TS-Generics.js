"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return (num1 + num2);
    }
    console.log("\nEntered Value is not a number!");
    return 0;
}
let s = add(3, 5);
console.log(`Sum Of Number is ${s}`);
s = add("34", 3);
console.log(`Sum Of Number is ${s}`);
class MyClass {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Sum() {
        if (typeof this.num1 === "number" && typeof this.num2 === "number") {
            console.log(`\nSum of: ` + (this.num1 + this.num2));
        }
        else
            console.log("\nCannot Sum");
    }
    concat() {
        if (typeof this.num1 === "string" && typeof this.num2 === "string") {
            console.log(`\nConcat: ${this.num1}${this.num2}`);
        }
        else
            console.log("\nCannot Concateneted");
    }
}
;
let obj1 = new MyClass(2, 4);
obj1.Sum();
obj1.concat();
let obj2 = new MyClass("May", "ank");
obj2.Sum();
obj2.concat();
let obj = {
    variable: 45454
};
console.log(`\n${obj.variable}\n`);
const obje = {
    num: "Mayank Yadav",
    length: 0
};
obje.length = obje.num.length;
console.log(obje);
