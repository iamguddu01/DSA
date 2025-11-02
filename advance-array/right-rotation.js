let arr = [1,2,3,4,5];
let copy = arr[arr.length-1];     // Making copy of last index bcoz the value will be lost 
for(let i=arr.length-1; i>=0; i--){   // Iterating from last inndex to 0
    arr[i] = arr[i-1];    // copy i-1 element to i 
}
arr[0] = copy;    // now pasting the value of last index in the position of first index
console.log(arr);
