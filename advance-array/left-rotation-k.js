// left rotation by K element
// This approach has time complexity n^2
// let arr = [1, 2, 3, 4, 5];
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter K value : "));

// if (k < arr.length) {     // Handling Error if the input of k is greater than length of array
//   for (j = 0; j < k; j++) {   // Nested loooping for Kth time of execution of left rotation
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {     // Loop for Left rotation
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy;
//   }
//   console.log(arr);
// } else {
//   console.log("The value of K is greater than length of array");
// }


// Another approach 
// temp = arr[(i+k) % arr.length]   this is a efficient approach 

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);
// let prompt = require("prompt-sync")();
// let k = Number(prompt("Enter K value : "));
// k = k % arr.length;     // Error handling like previous where we used if else
// for (let i = 0; i<arr.length; i++){
//     temp[i] = arr[(k+i) % arr.length];
// }
// console.log(temp);


// super efficient (Or) Block swap reverse algorithm
let arr = [1,2,3,4,5];
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter K value : "));
k = k % arr.length;

reverse(0, k-1);              // Reversing the starting numbers that will be shift 
reverse(k, arr.length-1);    // now reversing for index = k means form 3
reverse(0, arr.length-1);     // and now reversing the complete array 


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