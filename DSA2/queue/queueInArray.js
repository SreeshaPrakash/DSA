class Queue{
    constructor(){
        this.items = []
    }

    add(value){
        return this.items.push(value)
    }

    remove(){
        return this.items.shift()
    }

    show(){
        return this.items[0]
    }

    print(){
        console.log(this.items.join(' '))
    }

    getMax(){
        return Math.max(...this.items)
    }

    getMin(){
        return Math.min(...this.items)
    }

}
const q = new Queue();
q.add(90)
q.add(30)
q.add(40)
q.add(50)
q.print()
q.remove()
q.print()
console.log(q.getMax());
console.log(q.getMin());

