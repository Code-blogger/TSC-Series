import intro from "./index";
intro();

//Abstract Class
abstract class Person {
    constructor(
        protected name: string,
        protected email: string,
        private password: string
    ){};
    protected getpassword(): string{
        return this.password;
    }
    abstract show():void;
}

class Student extends Person {
   constructor(
    name: string, 
    email: string, 
    password: string,
    private rollnumber: number){
        super(name, email, password);
    }
    show():void{
        console.log("\n"+"Student Name: " + this.name);
        console.log("Student Email: " + this.email);
        console.log("Student Password: " + super.getpassword());
        console.log("Student Roll Number: " + this.rollnumber);
    }
}

class teacher extends Person {
    constructor(
        name: string, 
        email: string, 
        password: string,
        private idNumber: number,
        public subject: string,
        ){
            super(name, email, password);
    }
    show():void{
         console.log("\n"+"Student Name: " + this.name);
         console.log("Student Email: " + this.email);
         console.log("Student Password: " + super.getpassword());
         console.log("Student Roll Number: " + this.idNumber);
         console.log("Student Subject: " + this.subject);
    }
 }

const std=new Student("Mayank Yadav","mayanky975@gmail.com","mayank@975",121);
std.show();

const tch=new teacher("Prakash Patel","Prakash897@gmail.com","Prakash@897",432,"English");
tch.show();