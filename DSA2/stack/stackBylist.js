
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const node = new Node(value)
        if(!this.head){
            this.head = this.tail = node
        }
        node.prev = this.tail;
        this.tail.next = node
        this.tail = node;
    }

    remove(){
        if(!this.head) return 'stack is empty';
         this.tail = this.tail.prev;
         this.tail.next = null;
    }

    show(){
        return this.tail.value;
    }

    display(){
        let curr = this.head;
        let list = ''
        while(curr){
            list +=  `${curr.value} `
            curr = curr.next
        }
        console.log(list)
    }
   
}

const st = new Stack()
st.add(10)
st.add(20)
st.add(30)
st.add(40)
st.add(50)
st.display()
st.remove()
st.display()
console.log('last value : '+st.show());
