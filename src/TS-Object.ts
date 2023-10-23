import intro from "./index";
intro();

//object In Typescript
const school: { name: string, isCoED: boolean, city: string, affiliatedNo: number } = {
    name: "Rajeshwar Vidhalya",
    isCoED: false,
    city: "Indore",
    affiliatedNo:34595
};

console.log(school);

//index signature
let Person:{[index:string]:number} ={};
Person.Mayank=23;
Person.ABC=34;
