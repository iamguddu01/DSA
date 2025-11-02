// left rotation by K element
let arr = [1, 2, 3, 4, 5];
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter K value : "));

if (k < arr.length) {     // Handling Error if the input of k is greater than length of array
  for (j = 0; j < k; j++) {   // Nested loooping for Kth time of execution of left rotation
    let copy = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {     // Loop for Left rotation
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = copy;
  }
  console.log(arr);
} else {
  console.log("The value of K is greater than length of array");
}
