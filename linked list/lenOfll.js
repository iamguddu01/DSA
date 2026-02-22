// Find the node or length of ll 
function getCount(head){
    let size = 0;
    while(head != null){
        size++
        head = head.next;
    }
    return size;
}