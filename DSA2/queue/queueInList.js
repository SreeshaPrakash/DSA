class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const node = new Node(value)
        if(!this.tail){
            this.head = this.tail = node
        }
       this.tail.next = node;
       this.tail = node
    }

    remove(){
        if(!this.head){
            return 'queue is empty'
        }
        this.head = this.head.next
        this.head.prev = null;
    }

    show(){
        return this.head ? this.head.value : 'null'
    }

    print(){
        let curr= this.head;
        let listValues = ''
        while(curr){
            listValues +=  `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }

    getMax(){
        if(!this.head){
            return 'queue is empty'
        }
        let max = this.head.value;
        let curr = this.head.next
        while(curr){
            if(curr.value > max) max = curr.value;
            curr = curr.next
        }
        return max
    }


    getMin(){
        if(!this.head) return 'queue is empty';
        let min = this.head;
        let curr = this.head.next;
        while(curr){
            if(curr.value < min) min = curr.value;
            curr = curr.next;
        }
        return min.value;
    }

}

const q = new Queue()
q.add(20)
q.add(30)
q.add(40)
q.add(50)
q.print()
q.remove()
q.print()
console.log(q.show());

console.log('minimum value: ' + q.getMin());
console.log('maximum value: ' +q.getMax());

