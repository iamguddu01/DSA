let arr = [1,2,3,4,5];
let copy = arr[0];     // Making copy of first index bcoz the value will be lost 
for(let i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1];    // copy i+1 element to i 
}
arr[arr.length-1] = copy;    // now pasting the value the value of index in the position of last index
console.log(arr);
