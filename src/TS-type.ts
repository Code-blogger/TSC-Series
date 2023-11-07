import intro from "./index";
intro();

//type as alias
type num = number;
type str=string;
type bool = boolean;

type car = {
    carNumber:num,
    carName:str,
    carType:str,
    isPetrol:bool
}

let car:car = {
    carNumber:2424,
    carName:"Baleno",
    carType:"Hatchback",
    isPetrol:true
}

console.log(car);
console.log(typeof car);
        
//String type with union.
type genderType = "male" | "female" | "transgender"
let gender: genderType = "male";
console.log(gender);

//Intrinsic String Manipulation Types
let gen:Uppercase<genderType> ="MALE";
console.log(gen);