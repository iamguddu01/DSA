function insertionSort(arr){
    let n = arr.length;
    for(let i = 1; i<n; i++){
        let elem = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > elem){
            arr[j+1] = arr[j];
            j = j-1
        }
        arr[j+1] = elem
    }  
    return arr
}
let arr = [2,6,4,7,2,9]
console.log(insertionSort(arr));