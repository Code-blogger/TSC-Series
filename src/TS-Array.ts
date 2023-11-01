import intro from "./index";
intro();

//Defining the type of array explicitly
let array:string[] = ["sfbdf"];
array.push("jnkr");
console.log(array);
// array.push(34);    //It Will give error

//definethe type of array implicitly
let num=[54,46,78];
console.log(num);
console.log(num.pop());
console.log(num)
console.log(num.length);
// num.push("sfbdf"); //it will give an error

// Mixed type array
let arr:Array<string|number> =["Mayank",343.4,454,"gfhd"];
console.log(`\n${arr.join(" -- ")}`);

//Readonly Array in typescript: you can't modify the value of the array.
let a:ReadonlyArray<number> =[3,87,23,75,35,8];
a.forEach((a)=>{
    console.log(++a);
});
// a[3]=34; // it will give an error