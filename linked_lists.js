


class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    append(val){
        if (this.head === null){
            this.head = new Node(val);
            return;
        }
        
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(val)
    }

    print(){
        let str = '';
        let current = this.head;
        while( current !== null){
            str += current.val + ' -> ';
            current = current.next;
        }
        console.log(str);
    }

    contains(target) {
        let current = this.head;
        while( current !== null){
            if (current.val === target){
                return true
            }
            current = current.next;
        }
        return false
    }

}


const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append(true);
list.print();

console.log(list.contains('a'));
console.log(list.contains('b'));
console.log(list.contains('c'));
console.log(list.contains(true));
console.log(list.contains('x'));
console.log(list.contains('z'));