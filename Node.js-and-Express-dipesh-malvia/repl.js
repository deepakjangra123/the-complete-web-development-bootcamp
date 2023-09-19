const repl = require("repl");
// const local = repl.start();  ororo
// const local = repl.start("repl start using js file//also tis message will always gonna on side line");
//type node repl.js in terminal to goto repl

const local = repl.start("$");

// generate message while closing the repl 

local.on("exit",()=>{
    console.log("repl is closing!");
    process .exit();
});