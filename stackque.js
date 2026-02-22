function isValid(s) {
    let stack = [];
    let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }
    for(let ch of s){
        if(ch === '(' || ch === '{' || ch === '['){
            stack.push(ch);
        }else{
            if(stack.length === 0) return false;
            let top = stack.pop();
            console.log(top);
            console.log("=====================");
            console.log(map[ch]);
            if(top !== map[ch]) return false;
        }
    };
    return stack.length === 0;
};
console.log(isValid('(){}[]'));