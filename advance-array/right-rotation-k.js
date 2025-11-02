let arr = [1,2,3,4,5];
let prompt = require('prompt-sync')();
let k = Number(prompt("Enter K value : "));

if (k < arr.length) { 
for(j=0; j<k; j++){
    let copy = arr[arr.length-1];
    for(let i = arr.length-1; i >= 0 ; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = copy;
}
console.log(arr);
}else{
    console.log("The value of K is greater than length of array");
}
