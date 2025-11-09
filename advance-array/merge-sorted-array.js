// Merge sorted array 
arr1 = [2,5,6];
arr2 = [1,3,4,8];
let merge = new Array(arr1.length + arr2.length)
let i = j = k = 0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        merge[k] = arr1[i]
        i++;
        k++
    }else{
        merge[k] = arr2[j]
        j++;
        k++;
    }
}
while(i<arr1.length){
    merge[k]=arr1[i]
    i++;
    k++
}
while(j<arr2.length){
    merge[k]=arr2[j]
    j++;
    k++
}
console.log(merge);