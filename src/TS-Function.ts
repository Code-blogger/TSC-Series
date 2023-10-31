import { type } from 'os';
import intro from './index';
intro();

//function in typescript
type g=(age:number)=>void;  //function type
type t =(firstname:string, lastname?:string)=>string; //function type expression


function Name(firstName:string):string; // Overload Signature
function Name(firstName:string, lastName:string):string;
function Name(firstName:string, lastName?:string):string{ // Implmentation
    if(typeof lastName === "undefined")
        return firstName;
    return firstName + ' ' + lastName;
}


const Age:g = (age:number):number =>{console.log("Age: " + age); return 0;} //Lambda Function

function Mydetails(firstName: string, lastName: string,age:number=0,isMarried?:boolean|undefined):void{
    console.log("My Name: " + Name(firstName,lastName));
    Age(age);
    if(!(typeof isMarried === 'undefined')){
        console.log("IsMarried: " + isMarried+"\n");
    }
}

Mydetails("Mayank","Yadav",23,true);
Mydetails("Rishabh","Panchal",25);

// function as callback
function asCallback<T extends string>(callbacks:t,firstName:T, lastName?:T):string {
    if(typeof lastName ==="undefined")
        return callbacks(firstName);
    return callbacks(firstName,lastName);
}

console.log(`\n${asCallback(Name,"Piyush","Patel")}`);
console.log(`\n${asCallback(Name,"Hitesh Sahu")}`);