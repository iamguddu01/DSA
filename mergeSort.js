// Dividing 
function mergeSort(arr, s, e){
    if(s == e){ // If start and end are same means there is only one element and return 
        return
    }
    let mid = Math.floor((s+e)/2);
    // Sort left part
    mergeSort(arr, s, mid);
    // Sort the right part
    mergeSort(arr, mid+1, e);
    // Merging
    merge(arr, s, mid, e)
}


//Merge
function merge(arr, s, mid, e){
    let m = mid-s+1, n = e - mid; // Size of left and rigth arr 
    let nums1 = new Array(m);
    let nums2 = new Array(n);
    let lidx = 0, ridx = 0 // index of both new arr

    // creating left arr
    for(let i = s; i<=mid; i++){
        nums1[lidx] = arr[i]
        lidx++
    }

    // Creating right arr
    for(i = mid + 1; i<e; i++){
        nums2[ridx] = arr[i]
        ridx++
    }

    // Merge these 2 arr together now
    let idx = s, i = 0, j = 0
    while(i<m && j<n){
        if(nums1[i] <= nums2[j]){
            arr[idx] = nums1[i]
            idx++
            i++
        }else{
            arr[idx] = nums2[j]
            idx++
            j++
        }
    }
    while(i<m){
        arr[idx] = nums1[i]
        i++
        idx++
    }
    while(j<n){
        arr[idx] = nums2[j]
        idx++
        j++
    }
}
