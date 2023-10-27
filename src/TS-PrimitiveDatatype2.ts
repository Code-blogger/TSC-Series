import intro from "./index";
intro(); 

//BigInt Number: added after ES2020.
let variable: bigint = BigInt("343434343");
console.log(variable);


//Symbol: used to form unique key
let sym:Symbol = Symbol("name");
console.log(sym);