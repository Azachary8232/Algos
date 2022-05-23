

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
        let current = this.head
        if(this.head === null){
            return "empty list"
        }
        while(current !== null){
            str += " -> " + current.value
            current = current.next
        }
        return str

    }
}


list = new LinkedList()
list.append(5)
list.append(1)
list.append(3)
list.append(8)

console.log(list.print())

