import intro from './index';
intro();

interface vechicle {
	numberOftyre: number,
	vechilceName: string,
}

interface car extends vechicle {
	cartype: string,
	isPetrol: boolean
}

interface bike extends vechicle {
	bikeType: string
}

let car:car ={
    cartype: 'Hatchback',
    isPetrol: true,
    vechilceName:"Baleno",
    numberOftyre: 4
}

let bike:bike = {
    vechilceName: "Ninja h2r",
    numberOftyre: 2,
    bikeType: 'Super bike'
}

console.log(car);
console.log(bike);