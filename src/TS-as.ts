import intro from "./index";
intro();

//Type with as clause
let str:any =34;
console.log((str as number).toFixed(4));

//type with <type> notation
let num:unknown=53;
console.log((<number>num).toFixed(4));


//forced Casting: type => unknow => desired type
let n:number =87;
console.log((<string>(<unknown>n)).length);