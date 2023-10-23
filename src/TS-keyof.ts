import intro from "./index";
intro();

//keyof keyword => determine the type of the key of any object
interface OBJECT {
    name: string,
    age:number,
    isMarried:boolean
}
let obj:OBJECT={
    name:"Mayank Yadav",
    age:34,
    isMarried:false
};

function Intro(object:OBJECT,str:keyof OBJECT) {
    console.log(`${str} = ${object[str]}`);
}

Intro(obj,"name");
Intro(obj,"age");
Intro(obj,"isMarried");