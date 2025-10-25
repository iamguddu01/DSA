// Valid voter 
let ans = Number(prompt("What is your age ??"))
if(isNaN(ans)){
    console.log("Wrong Input !!");
}
else if(ans >= 18){
    console.log("You can vote")
}
else{
    console.log("You cannot vote !!");
}
