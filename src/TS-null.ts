import { type } from "os";
import intro from "./index";
intro();

//Optional Chaining
type OBJECT= {
    name:string,
    age?:number, // ?: is used for Optional Chaining
    isMarried:boolean
}
let obj: OBJECT={
    name:"Mayank Yadav",
    isMarried:false
};
console.log(obj?.age+ "\n"); //?. is use to access the Optional Variable

//NUllish Coalescence
function INTRO(name:OBJECT, key: keyof OBJECT):void {
    console.log(`${key}: ${name[key]??"Not Unavaliable"}`); //?? is uses for NUllish variable
}
INTRO(obj,"name");
INTRO(obj,"age");
INTRO(obj,"isMarried");

//Null Assertion
function IsAge(age:number):void {
    console.log(`My Age: ${age}`);
}

IsAge(obj.age!);