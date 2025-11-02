// with extra space (We have to create an empty array of the length of actual array that will also get some space)
let arr = [12,56,45,34,20];
let temp = new Array(arr.length);
let a = 0;
for (let i = arr.length - 1; i>=0; i--){
    temp[a] = arr[i];
    a++;
}
console.log(temp);


// Without creating extra space
let brr = [10,20,30,40,50];
let i = 0, j = brr.length-1;
while(i!=j){
    let tempp = brr[i];      // So here we are iterating i from first index and j from last index until the mid point or they clash
    brr[i] = brr[j];         // and swapping each other and incrementing i to move forward and decrementing j to move backward
    brr[j] = tempp;
    i++;
    j--;
}
console.log(brr);