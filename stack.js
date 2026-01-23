// Stack implementation using array
class Stack{

    constructor(capacity){
        this.capacity = capacity;
        this.arr = new Array(this.capacity)
        this.top = -1;
    }

    // Push operation 
    push(value){
        if(this.isFull()){
            console.log("Stack Overflow");
            return
        }
        this.arr[++this.top] = value;
    }

    // Pop operation 
    pop(){
        if(this.isEmplty()){
            console.log("Stack Underflow");
            return -1;
        }
        return this.arr[this.top--];
    }

    // Peak operation
    peak(){
        if(this.isEmplty()){
            console.log("Stack is Empty!");
            return -1;
        }
        return this.arr[this.top];
    }

    // isEmpty operation 
    isEmplty(){
        return this.top === -1;
    }

    // isFull operation (overflow)
    isFull(){
        return this.top === this.capacity-1
    }

    // Size of stack
    size(){
        return this.top + 1;
    }

    // Print stack
    printStack(){
        if(this.isEmplty()){
            console.log("Stack is Empty!");
            return
        }
        for(let i = this.top; i >=0; i--){
            console.log(this.arr[i]);
        }
    }
}

const stack = new Stack(5);
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.printStack();
console.log(stack.pop());
console.log(stack.peak());
console.log(stack.size());