let arr = [12,55,66,32,100,2,3,4];
let max = arr[0];
for(let i = 1; i < arr.length; i++ ){
    if (max < arr[i]){
        max = arr[i];
    }
}
console.log(max);