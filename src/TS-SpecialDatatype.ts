import intro from './index';
intro();

//Any type => can convert into any type acc. to variable.
let num:any;
num="It is a string";
console.log(typeof num);
num=23;
console.log(typeof num);

//Never type => Never return anything
function NeverBlocked(err:string): never{
    throw new Error(err);
}
try{
    NeverBlocked("Never Block Call");
}catch(err:any){
    console.log("\n"+err.message+"\n");
}

//unknown type => safer version of any type
let unk:unknown = "unknown";
let y:number = 34;
unk=y;
console.log(unk);
// y=unk.toString();  it will give error

//void type: variable is empty.
function fun():void{

}
console.log(fun());


//undefined type=> variable is undefined. = uninitialized
let un:undefined = undefined;
console.log(typeof un);

//null type=> variable is null. = 0
let nu:null=null;
console.log(typeof nu);