

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    append(){
        if(this.head === null){
            this.head = new Node(value)
            return
        }
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        current.next = new Node(value)
        
    }
}
