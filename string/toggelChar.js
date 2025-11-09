// ASCII value of A - Z => 65 - 90
// ASCII value of a - z => 97 - 122
let str = "doODle";
let toggle = "";
for(let i = 0; i<str.length; i++){
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
        toggle = toggle + String.fromCharCode(str.charCodeAt(i) + 32);      // Because the difference between ascii value of capital letter and small letter is 32
    }else if(str.charCodeAt(i) >=97 && str.charCodeAt(i) <= 122){
        toggle = toggle + String.fromCharCode(str.charCodeAt(i) - 32);
    }
}
console.log(toggle);