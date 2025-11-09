// Checking frequency of each character in string
// Maintainig frequency 
let prompt = require('prompt-sync')();
let str = prompt("Enter a String : ");
let arr = new Array(122).fill(0);   // By default filling 0
for(let i = 0; i<str.length; i++){
    let index = str.charCodeAt(i); // created a variable index and storing ascii value of i in it
    arr[index] = arr[index] + 1; // if a character repeats then the value in array will be updated  
}
// Retreiving frequency 
for(let i = 0; i<arr.length; i++){ // Traversing in array and Converting ascii value to character.
    if (arr[i] > 0){
        console.log(String.fromCharCode(i) + " appears at " + arr[i] + " times.");
    }
}
