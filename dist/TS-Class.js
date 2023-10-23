"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
const prompt = require("prompt-sync")();
class nuclearFamily {
    constructor(noOfMembers, netWorth) {
        this.noOfMembers = noOfMembers;
        this.netWorth = netWorth;
        this.Show = () => {
            console.log("\n" + "FamilyNumber: " + this.familynumber);
            console.log("Number Of Members: " + this.noOfMembers);
            console.log("Number Of Members: " + this.netWorth);
        };
        this.familynumber = ++nuclearFamily.num;
    }
}
nuclearFamily.num = 0;
;
const family = new nuclearFamily(prompt("Enter Number of Member: ", "0"), prompt("Enter Net Worth: ", "0"));
const family1 = new nuclearFamily(prompt("Enter Number of Member: ", "0"), prompt("Enter Net Worth: ", "0"));
family.Show();
family1.Show();
