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
const family1 = new nuclearFamily( prompt("Enter Number of Member: ","0") ,prompt("Enter Net Worth: ","0"));

family.Show();
family1.Show();