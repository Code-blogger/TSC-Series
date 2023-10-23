import intro from './index';
intro();
type p =[Name:string, age:number|string, contact:string|number]
let Person:p;
Person=["Mayank Yadav",23,"+91-34342"];

Person.forEach((per,index:number)=>console.log(per + ": " + index));


Person=["Mayank Yadav",23,9134342];

Person.forEach((per,index:number)=>console.log(per + ": " + index));