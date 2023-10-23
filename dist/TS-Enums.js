"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
var button;
(function (button) {
    button[button["off"] = 0] = "off";
    button[button["on"] = 1] = "on";
    button["name"] = "2-Switch";
})(button || (button = {}));
;
console.log("Button: " + button.name);
console.log("Button - off = " + button.off);
console.log("Button - on = " + button.on);
