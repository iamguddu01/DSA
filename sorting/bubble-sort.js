// Sorting in ascending order through bubble sort
let arr = [10,5,1,12];
for(let i=0; i<arr.length-1; i++){
    for(j=0; j<arr.length-1-i; j++){          // Bcoz each phase has some set operation which will reduce according to phases or i so that's why setting the end point j<arr.length-1-i
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr);