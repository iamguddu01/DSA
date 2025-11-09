let str = "madam";
let isPalindrome = true;
let i = 0, j = str.length-1;
while(i<j){
    if(str.charAt(i) != str.charAt(j)){
        isPalindrome = false;
        break;
    };
    i++
    j--
}
if(isPalindrome) {
    console.log("Palindrome");
}else{
    console.log("Not a palindrome");
}