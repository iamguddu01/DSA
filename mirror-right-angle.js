let prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number : "));
for(let i = 1; i<=n ; i++){
    //Inverted pattern
    for(let j = 1; j<=n-i; j++){
        process.stdout.write("  ");     // Use single space to shape a perfect triangle
    }
    // Right angle pattern
    for(let j = 1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}