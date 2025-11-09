// Remove duplicate elements from a sorted array and return the unique the elements
var arr = [0,0,1,1,1,2,2,3,4,4,5,5];
let removeDuplicate = function(nums){
    let j = 1;
    for(let i = 0; i<arr.length-1; i++){
        if(nums[i] != nums[i+1]){
            nums[j] = nums[i+1]
            j++
        }
    }
    return j;
}
console.log(removeDuplicate(arr));
console.log(arr);