let arr = [10,5,1,12];
for(let i=0; i<arr.length-1; i++){
    let minIndex = i;
    for(j=i+1; j<arr.length-1; j++){
        if(arr[minIndex] > arr[j]){
            minIndex = j;
        }
        if(minIndex != i){
            let temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
    }
}
console.log(arr);