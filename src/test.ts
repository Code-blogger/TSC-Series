class myArray extends Array{
    constructor(public array: number) {
        super(array);
    }

    show=(): void =>{
        console.log(this.array);
    }
}

let arr =new myArray(67);

arr.show();