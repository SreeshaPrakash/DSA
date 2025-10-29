class Queue{
    constructor() {
        this.items = [1,2,3,4,5]
    }

    reverse(){
        const stack = [];
        while(this.items.length > 0){
            stack.push(this.items.shift())
        }
        

        while(stack.length > 0){
            this.items.push(stack.pop())
        }
    }

    display(){
        console.log(this.items.join(' '))
    }


}

const q = new Queue()
q.display()
q.reverse()
q.display()