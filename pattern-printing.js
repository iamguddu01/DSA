let prompt = require('prompt-sync')();
let a = Number(prompt("Enter a number : "));
// console.log(a);   // or process.stdout.write(a). it will not run in chrome
for(let i = 1; i <= a; i++){
    for(let j = 1; j<=a; j++){
       process.stdout.write("* ");       // its printing in row, But if i use clog it will print in cloumn 
    } 
    console.log(); // Adding new lines 
}