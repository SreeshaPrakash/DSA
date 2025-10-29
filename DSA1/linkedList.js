//linkedlist

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head  = node
            this.size++;
            return
        }   
        node.next = this.head
        this.head = node
        this.size++;
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node;
            return
        }
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
        this.size++;
    }

    insertAt(value, index){
        const node = new Node(value)
        if(!this.head ){
            this.head = node
        }
        if(index==0){
            node.next = this.head
            this.head = node
        } else {
            let prev = this.head
           for(let i=0; i<index-1; i++){
            prev = prev.next
           }
           node.next = prev.next
           prev.next = node
        }
        this.size++;
    }

    print(){ 
        let curr = this.head
        let listValues  = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }

    removefrom(index){
        if(index === 0){
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0 ; i<index-1; i++){
                prev = prev.next
            }

            prev.next = prev.next.next

        }
        this.size--;
    }

    removelast(){
        if(!this.head){
            return null
        }
        if(!this.head.next){
            const value = this.head.value
            this.head = null;
            return;
        } 
        let prev = this.head
        while(prev.next.next){
            prev = prev.next
        }
        const value = prev.next.value
        prev.next = null;
        this.size--;
        return
    }

    search(value){
      if(!this.head){
        return false;
      }
        let curr = this.head
        while(curr){
            if(curr.value == value){
                return true;
            } else {
                curr = curr.next
            }
        }
        return false;
    }

    count(){
        return this.size
    }

    findMiddle(){
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.value;
    }

    insertAtMiddle(value){
        const node = new Node(value)
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next){
            fast = fast.next.next
            prev = slow;
            slow = slow.next;
        }
       node.next = prev.next
       prev.next = node
    }

    removefromMiddle(){
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next){
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
        prev.next = prev.next.next
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        }
        this.head = prev
    }

    //nth node from back
    backNth(n){
        let curr = this.head
        let count =0;
        while(curr.next){
            curr = curr.next;
            count++;
            if(count = count-n+1){
            return curr.value;
        }  
        }
    }
}

const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.append(30)
list.append(70)
list.insertAt(40,2)
list.insertAt(50,4)
list.removefrom(0)
list.removelast()
console.log(list.search(40));
console.log(list.count())
console.log(list.findMiddle());
list.insertAtMiddle(60)
list.removefromMiddle()
list.print()
console.log('nth value from back:')
console.log(list.backNth(3))
list.reverse()
console.log('reversed list:')
list.print()




