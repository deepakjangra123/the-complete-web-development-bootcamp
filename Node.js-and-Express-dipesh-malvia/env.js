require("dotenv").config();  // MUST BE WRITE ALWAYS ABOVE //
//if u want to not write the above line then type below line terminal 
// node -r dotenv/config env.js
console.log(process.env.name);
console.log(process.env.profession);
console.log("GOOD lUCK! ",process.env.name);