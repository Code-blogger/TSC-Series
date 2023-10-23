"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
(0, index_1.default)();
class Person {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    ;
    getpassword() {
        return this.password;
    }
}
class Student extends Person {
    constructor(name, email, password, rollnumber) {
        super(name, email, password);
        this.rollnumber = rollnumber;
    }
    show() {
        console.log("\n" + "Student Name: " + this.name);
        console.log("Student Email: " + this.email);
        console.log("Student Password: " + super.getpassword());
        console.log("Student Roll Number: " + this.rollnumber);
    }
}
class teacher extends Person {
    constructor(name, email, password, idNumber, subject) {
        super(name, email, password);
        this.idNumber = idNumber;
        this.subject = subject;
    }
    show() {
        console.log("\n" + "Student Name: " + this.name);
        console.log("Student Email: " + this.email);
        console.log("Student Password: " + super.getpassword());
        console.log("Student Roll Number: " + this.idNumber);
        console.log("Student Subject: " + this.subject);
    }
}
const std = new Student("Mayank Yadav", "mayanky975@gmail.com", "mayank@975", 121);
std.show();
const tch = new teacher("Prakash Patel", "Prakash897@gmail.com", "Prakash@897", 432, "English");
tch.show();
