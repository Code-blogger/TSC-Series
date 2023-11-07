import { get } from "http";
import intro from "./index";
intro();

const prompt = require("prompt-sync")();

//Declaration of the Class in TypeScript
interface family {
    noOfMembers: number,
    netWorth: number,
    Show:()=>void
}

//Declaration of the Class in TypeScript
class nuclearFamily implements family {
    private static num:number =0;
    readonly familynumber:number;
    constructor(
        public noOfMembers: number, 
        public netWorth: number, 
    ){
        this.familynumber= ++nuclearFamily.num;
    }
    Show = ():void=>{
        console.log("\n"+"FamilyNumber: " + this.familynumber);
        console.log("Number Of Members: " + this.noOfMembers);
        console.log("Number Of Members: " + this.netWorth);
    }
};

const family = new nuclearFamily( prompt("Enter Number of Member: ","0") ,prompt("Enter Net Worth: ","0"));
family.Show();

class myClass{
	name:string;
    // age:number|undefined;
    constructor();
    constructor(name:string,age?:number)
    constructor(name?:any, private _age?:any){
        this.name=name;
        this._age= _age;
    }
    set age(value:number){
        this._age=value;
    }

    show = ():void=>{   
        console.log(`My Name is ${this.name} and Age is ${this._age}`);
    }
}

let obj1= new myClass("Mayank Yadav");
obj1.show();
console.log(obj1["_age"]);//private member aloows to access them by bracket notation.
obj1.age =343;
obj1.show();
console.log(obj1["_age"]);

let obj2 = new myClass("Piggy",33);
obj2.show();