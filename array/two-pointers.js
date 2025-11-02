// Move all zeroes in left side and all one oin right side 
let arr = [1,0,0,1,1,0,1,0,1];
let i=0, j=0;
while(i<arr.length){           // SO here we are starting i and j form same point and if i = 0 then the value between i and j swapped
    if(arr[i] == 0){            // and j will move forward (j++) and i will always move forward.
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr);