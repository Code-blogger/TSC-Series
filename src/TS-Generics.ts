import { Console } from 'console';
import intro from './index';
import { type } from 'os';
intro();

//function Generics
function add<T>(num1:T,num2:T):T {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return (num1 + num2) as T;
    }
    console.log("\nEntered Value is not a number!");
    return 0 as T;
}

let s:unknown = add<number>(3,5);
console.log(`Sum Of Number is ${s}`);

s = add<string|number>("34",3);
console.log(`Sum Of Number is ${s}`);

//Genrics Class
class MyClass<T = number>{
    constructor(
        private num1:T,
        private num2:T
    ){}

    Sum():void{
        if(typeof this.num1 === "number" && typeof this.num2 === "number"){
            console.log(`\nSum of: `+ (this.num1 + this.num2));
        }else      
        console.log("\nCannot Sum");
    }

    concat():void{
        if(typeof this.num1 === "string" && typeof this.num2 === "string"){
            console.log(`\nConcat: ${this.num1}${this.num2}`);
        }else
        console.log("\nCannot Concateneted");
    }
};

let obj1 = new MyClass(2,4);
obj1.Sum();
obj1.concat();

let obj2 = new MyClass<string>("May","ank");
obj2.Sum();
obj2.concat();

//Generic type alias
type myType<T> = {
    variable:T,
}

let obj:myType<number>={
    variable:45454
}
console.log(`\n${obj.variable}\n`);

//Generic interface
interface myInterface<T extends string|number,S=number> {
    num:T,
    length:S,
}

const obje:myInterface<string> = {
    num:"Mayank Yadav",
    length: 0
}

obje.length = obje.num.length;
console.log(obje);