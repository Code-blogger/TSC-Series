"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
class vehicle {
    constructor(name, vehicleNumber, noOfTyre, noOfPeople) {
        this.name = name;
        this.vehicleNumber = vehicleNumber;
        this.noOfTyre = noOfTyre;
        this.noOfPeople = noOfPeople;
    }
    ;
    getVechileNumber() {
        return this.vehicleNumber;
    }
}
class bike extends vehicle {
    constructor(name, vehicleNumber, noOfTyre, noOfPeople) {
        super(name, vehicleNumber, noOfTyre, noOfPeople);
        this.Show = () => {
            console.log("\n" + "Bike Name: " + this.name);
            console.log("Bike: " + this.noOfTyre);
            console.log("Bike Number: " + super.getVechileNumber());
            console.log("Number of people: " + this.noOfPeople);
        };
    }
}
class car extends vehicle {
    constructor(name, vehicleNumber, noOfTyre, numberOfPeople, isPetrol) {
        super(name, vehicleNumber, noOfTyre, numberOfPeople);
        this.isPetrol = isPetrol;
        this.Show = () => {
            console.log("\n" + "Car Name: " + this.name);
            console.log("Car: " + this.noOfTyre);
            console.log("Car Number: " + super.getVechileNumber());
            console.log("Number of people: " + this.noOfPeople);
            console.log("petrol: " + this.isPetrol);
        };
    }
}
const bk = new bike("Ninja-h2r", 2324, 2, 1);
bk.Show();
const cr = new car("Mustang", 7565, 4, 2, true);
cr.Show();
