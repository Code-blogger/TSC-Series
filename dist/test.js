"use strict";
class myArray extends Array {
    constructor(array) {
        super(array);
        this.array = array;
        this.show = () => {
            console.log(this.array);
        };
    }
}
let arr = new myArray(67);
arr.show();
