

class Queue{
    constructor(){
        this.items = [1,2,3,4,5]
    }

    reverse(){
        if(this.items.length == 0) return;
        let temp = this.items.shift()
        this.reverse()
        this.items.push(temp)
    }

    display(){
        console.log(this.items.join(' '))
    }
}
const q = new Queue()
q.display()
q.reverse()
q.display()











