import intro from "./index";
intro();

//base class
class vehicle  {
    constructor(
        protected name: string, 
        private vehicleNumber: number, 
        protected noOfTyre:number,
        protected noOfPeople:number
    ){};
    getVechileNumber(): number{
        return this.vehicleNumber;
    }
}

//derived Class
class bike extends vehicle  {
    constructor(name: string, vehicleNumber: number, noOfTyre:number,noOfPeople:number) {
        super(name, vehicleNumber, noOfTyre, noOfPeople);
    }
    Show = ():void=>{
        console.log("\n"+"Bike Name: " + this.name);
        console.log("Bike: " + this.noOfTyre);
        console.log("Bike Number: " + super.getVechileNumber());
        console.log("Number of people: " + this.noOfPeople);
    };
}

class car extends vehicle  {
    constructor(name: string, vehicleNumber: number, noOfTyre:number, numberOfPeople:number, private isPetrol:boolean) {
        super(name, vehicleNumber, noOfTyre,numberOfPeople);
    }
    Show = ():void=>{
        console.log("\n"+"Car Name: " + this.name);
        console.log("Car: " + this.noOfTyre);
        console.log("Car Number: " + super.getVechileNumber());
        console.log("Number of people: " + this.noOfPeople);
        console.log("petrol: " + this.isPetrol);
    };
}

const bk = new bike("Ninja-h2r",2324,2,1);
bk.Show();

const cr = new car("Mustang",7565,4,2,true);
cr.Show();