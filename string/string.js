let str = "Govind Kumar";
let rev = "";
for(i = 0; i<str.length; i++){
    console.log(str.charAt(i));
    // console.log(str[i]);
};
console.log();
for(i = str.length-1; i>=0; i--){
    // console.log(str[i]);
    rev = rev + str.charAt(i);
};
console.log(rev) ;