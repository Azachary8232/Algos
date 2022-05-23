

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

    append(value){
        if(this.head === null){
            this.head = new Node(value)
            return
        }
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        current.next = new Node(value) 
        return
    }

    print(){
        let str = ""
        if(this.head = null){
            return "empty list"
        }
        current = this.head
        while(current.next !== null){
            str += " -> " + current.value
        }
        str += current.value
    }
}


list = new LinkedList()
list.append(5)
list.append(1)
list.append(3)
list.append(8)

console.log(list)