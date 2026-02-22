class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    append(value){
        const newNode = new Node(value);
        // If list is empty
        if(this.head == null){
            this.head = newNode
        }else{
            let current = this.head;

            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    // Add a new node at the beggining of list
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    print(){
        let current = this.head
        while(current != null){
            console.log(current.value);
            current = current.next
        }
    }
    
}
const li = new LinkedList
li.append(1)
li.append(2)
li.append(3)
li.prepend(4)
li.print()