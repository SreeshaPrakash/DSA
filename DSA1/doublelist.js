
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublelist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node;
             this.size++
            return;
        }
        node.next = this.head
        this.head.prev = node;
        this.head = node;
         this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.tail){
            this.head = this.tail = node;
             this.size++
             return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
         this.size++
    }

    insertAt(value, index){
        const node = new Node(value)
        if(index === 0){
            this.prepend(value);
            return;
        }
        if(index == this.size){
            this.append(value);
            return;
        }
        
        let curr = this.head
        for(let i=0; i<index-1; i++){
            curr = curr.next;
        }
        node.next = curr.next;
        node.prev = curr
        curr.next.prev = node;
        curr.next = node;
         this.size++;
    }

    removefirst(){
        if(!this.head){
            this.head = this.tail  = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    removelast(){
        if(!this.tail){
            this.head = this.tail = null;
        }
        this.tail= this.tail.prev
        this.tail.next = null;
        this.size--;
    }

    removeFrom(index){
         if(index === 0){
            this.removefirst();
            return;
        }
        if(index == this.size-1){
            this.removelast();
            return;
        }
        let curr = this.head
        for(let i=0;i<index; i++){
            curr = curr.next;
        }
        curr.prev.next = curr.next;
        curr.next.prev = curr.prev;
        this.size--;
    }

    findMiddle(){
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow= slow.next;
        }
        return slow.value;
    }

    insertMiddle(value){
        const node = new Node(value)
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next){
            fast = fast.next.next;
            prev = slow;
            slow= slow.next;
        }
        node.next = prev.next;
        node.prev = prev
        prev.next = node;
        // node.next = slow;
        slow.prev = node;
        this.size++;
    }

    removeMiddle(){
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
        prev.next = slow.next
        slow.next.prev = prev;
        this.size--;
    }

    duplicate(){
        const dup = new doublelist()
        let curr = this.head
        while(curr){
            dup.append(curr.value);
            curr = curr.next;
        }
        return dup;
    }

    print(){
        let curr = this.head
        let listValues= ''
        while(curr){
            listValues +=`${curr.value} `
            curr = curr.next;
        }
        console.log(listValues)
    }
}
const list = new doublelist()
list.prepend(20)
list.append(30)
list.insertAt(40,2)
list.append(50)
list.prepend(60)
list.removefirst()
list.removelast()
list.removeFrom(2)
list.print()
console.log(list.findMiddle());
list.insertMiddle(90)
list.print()
list.removeMiddle()
list.print()

const copied = list.duplicate();
console.log("coppied:")
copied.print();
