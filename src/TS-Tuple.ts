import intro from "./index";
intro();
// declare var require: any
const prompt= require("prompt-sync")();

//tuple:fixed length array and type defined array
let detail:[string|null, string|null, string|null];
let name:string|null=prompt("Enter The Name :");
let age:string|null=prompt("Enter the age : ");
let isMarried:string|null=prompt("Is Married? : ");
detail=[name,age,isMarried];

console.log("Entered Details: "+detail);

//Name Tuple
let Mydetails:[name:string,age:number,isMarried:boolean]=["Mayank Yadav",23,false];
console.log("\nMy Details: "+Mydetails.join(" , "));

//destructing tuple
 let [myName,myAge,myIsMarried]= Mydetails;
console.log("\nMy Name: "+myName);
console.log("My Age: "+myAge);
console.log("My Martial Status: "+myIsMarried);

