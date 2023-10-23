"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
let cr = {
    radius: 7
};
if (typeof cr.radius === "number") {
    cr.circumference = 2 * 3.14 * cr.radius;
    cr.area = 3.14 * cr.radius * cr.radius;
}
console.log(cr);
let circle = {
    radius: 4,
    area: 0,
    circumference: 0
};
if (typeof circle.radius === "number") {
    circle.circumference = 2 * 3.14 * circle.radius;
    circle.area = 3.14 * circle.radius * circle.radius;
}
console.log(circle);
let cir = {
    radius: 3
};
console.log(cir);
let c = {
    radius: 6,
    area: 343
};
console.log(c);
let circ = {
    radius: 34,
    area: 0,
    circumference: 0
};
console.log(circ);
