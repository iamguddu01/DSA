// Method 1 
let a = 10;
let b = 20;
let c = a;   // c = 10
a = b;       // a = 20
b = c;       // b = 10 
console.log("Method 1 results are : " + a, b);   // Done 👍


// Method 2
let o = 10;
let p = 20;
o = o + p;   // o = 30
p = o - p;   // p = 10
o = o - p;   // o = 20
console.log("Methid 2 results are : " + o,p);


// Method 3
q = 10; 
r = 20; 
[q,r] = [r,q]
console.log("Method 3 results are : " + q,r);