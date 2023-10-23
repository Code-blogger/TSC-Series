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
num.pop();
console.log(num)
console.log(num.length);
// num.push("sfbdf"); //it will give an error