


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     append(value){
//         if (this.head === null){
//             this.head = new Node(value);
//             return;
//         }
        
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = new Node(value)
//     }

//     print(){
//         let str = '';
//         let current = this.head;
//         while( current !== null){
//             str += current.value + ' -> ';
//             current = current.next;
//         }
//         console.log(str);
//     }

//     contains(target) {
//         let current = this.head;
//         while( current !== null){
//             if (current.value === target){
//                 return true
//             }
//             current = current.next;
//         }
//         return false
//     }

// }


// const list = new LinkedList();
// list.append('a');
// list.append('b');
// list.append('c');
// list.append(true);
// list.print();

// console.log(list.contains('a'));
// console.log(list.contains('b'));
// console.log(list.contains('c'));
// console.log(list.contains(true));
// console.log(list.contains('x'));
// console.log(list.contains('z'));



                        // Recursive Linked List


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}



class LinkedList{
    constructor(){
        this.head = null
    }

    append(value){
        if(this.head === null){
            this.head = new Node(value);
            return
        }
        this._append(value, this.head);
    }

    _append(value, current){
        if(current.next === null){
            current.next = new Node(value);
            return;
        }
        this._append(value, current.next);
    }
}








const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
console.log(list.head)