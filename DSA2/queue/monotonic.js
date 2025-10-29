class Queue{
    constructor(){
        this.items = []
    }

    add(value){
       while(this.items.length > 0  && this.items[this.items.length-1]> value){
            this.items.pop(0)
        }  
        this.items.push(value);
    }

    remove(){
        return this.items.shift()
    }

    display(){
        console.log(this.items.join(' '))
    }
}

const q = new Queue()
q.add(30)
q.add(20)
q.add(40)
q.add(50)
q.add(10)
q.add(12)
q.add(14)
q.display()