let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number : ")); 
for(let i = 1; i <= n; i++){
    let ascii = 65;    // In ASCII the ABCD starts from 65 
    for(let j = 1; j<=i ; j++){
        process.stdout.write(String.fromCharCode(ascii) + " "); // Converting ASCII numeric value to alphabet with string func
        ascii++;
    }
    console.log();
}