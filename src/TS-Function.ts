import { type } from 'os';
import intro from './index';
intro();

//function in typescript
type t=(firstName:string, lastName:string)=>string;  //function type

const Name:t=(firstName:string, lastName:string):string => {
    return firstName + ' ' + lastName;
}

function Mydetails(firstName: string, lastName: string,age:number=0,isMarried?:boolean|undefined):void{
    console.log("My Name: " + Name(firstName,lastName));
    console.log("Age: " + age);
    if(!(typeof isMarried === 'undefined')){
        console.log("IsMarried: " + isMarried+"\n");
    }
}

Mydetails("Mayank","Yadav",23,true);
Mydetails("Rishabh","Panchal",25);