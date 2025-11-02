// let arr = [1,2,3,4,5];
// let prompt = require('prompt-sync')();
// let k = Number(prompt("Enter K value : "));

// if (k < arr.length) { 
// for(j=0; j<k; j++){
//     let copy = arr[arr.length-1];
//     for(let i = arr.length-1; i >= 0 ; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[0] = copy;
// }
// console.log(arr);
// }else{
//     console.log("The value of K is greater than length of array");
// }


// Another sufficient approach 
// arr[(i+k) % arr.length ] = arr[i]; 
// let arr = [1,2,3,4,5];
// let temp = Array(arr.length);
// let prompt = require('prompt-sync')();
// let k = Number(prompt("Enter K value : "));
// for(i = arr.length-1; i>=0 ; i--){
//     temp[(i+k) % arr.length] = arr[i];
// }
// console.log(temp);


// Super efficient

let arr = [1,2,3,4,5];
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter K value : "));
k = k % arr.length;

reverse(0, arr.length-1);      // reversing the complete array first 
reverse(0, k-1);              // Reversing the starting numbers 
reverse(k, arr.length-1);    // now reversing for index = k means form 3


function reverse (i, j){
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j]; 
        arr[j] = temp
        i++;
        j--;
    }
}
console.log(arr);