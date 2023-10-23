import intro from "./index";
intro();

//enums in typescript = define the constant in typescript
enum button{ 
    // name="2-Switch" //try to change the order of the constant
    off, // use off=0
    on,
    name="2-Switch"
};

console.log("Button: " + button.name);
console.log("Button - off = " + button.off);
console.log("Button - on = " + button.on);
