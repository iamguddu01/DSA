let arr = [23,56,43,24,66,11];
let max = Math.max(arr[0], arr[1]); //66
let sMax = Math.min(arr[0],arr[1]);  //56

for(let i=2; i<arr.length; i++ ){
    if(arr[i] > max){
        sMax = max;  // set second max value first, bcoz if max value will be set first then we lost the value that we have to add in second max
        max = arr[i];
    }else if(arr[i] > sMax && max != arr[i]){    // Using else if to to update and continue the array, if not used the array will not traverse completely and will be stopped if the value will not greater than max 
        sMax = arr[i];                           // Using AND becoz if max = arr[i] than the value will be putted in second max and the ans would be wrong
    }
}
console.log(sMax);