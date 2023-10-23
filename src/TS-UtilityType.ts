import {default as intro, Circle} from "./index";
intro();

//Partial Utility => the properties of the object are optional
let cr:Partial<Circle<number>> = {
    radius:7
}
if (typeof cr.radius === "number"){
    cr.circumference = 2*3.14*cr.radius;
    cr.area = 3.14*cr.radius*cr.radius;
}
console.log(cr);

// Reqiured Utility => the properties of the object are required
let circle:Required<Circle> ={
    radius:4,
    area:0,
    circumference:0
};
if (typeof circle.radius === "number"){
    circle.circumference = 2*3.14*circle.radius;
    circle.area = 3.14*circle.radius*circle.radius;
}
console.log(circle);


//Omit Utility => We can omit few properties
let cir:Omit<Circle, "area"|"circumference"> ={
    radius:3
}
console.log(cir);

//Pick utility => we can pick several properties which we want to pick
let c:Pick<Circle, 'radius'|'area'> ={
    radius:6,
    area:343
}
console.log(c);

//Parameter Type => this will extract the type of the parameter
// const fun = <T>(a:T):string => "string";

// console.log(fun(3));
// let P:Parameters<fun>[0] ={
//     a:"ghjh"
// }

//Readonly type => we can't change the value of the object.
let circ:Readonly<Circle>={
    radius:34,
    area:0,
    circumference:0
}
// circ.radius=9; // this will give you error.
console.log(circ);