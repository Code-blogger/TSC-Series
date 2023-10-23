import intro from "./index";
intro(); 

function myDetail(name: string,age: number,isMarried: boolean){
    console.log("Full Name: " + name);
    console.log("Age: " + age);
    console.log("Married: "+isMarried);
}

//String Type
let Name: string = "Mayank";
console.log("First Name: "+Name);
Name="Mayank Yadav";

//Number Type
let age: number = 23;

//Boolean Type
let isMarried: boolean = false;

myDetail(Name,age,isMarried);