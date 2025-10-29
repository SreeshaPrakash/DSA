class Queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    add(value){
        this.s1.push(value)
    }

    remove(){
        while(this.s1.length> 1){
            this.s2.push(this.s1.pop())
        }
        let removed = this.s1.pop();

        while(this.s2.length > 0){
            this.s1.push(this.s2.pop())
        }
        return removed;
    }

    show(){
         while(this.s1.length> 1){
            this.s2.push(this.s1.pop())
        }
        let first = this.s1.pop();

        while(this.s2.length > 0){
            this.s1.push(first)
            this.s1.push(this.s2.pop())
        }
        return first;
    }

    display(){
        console.log( this.s1.join(' '));
        
    }
}
const q = new Queue()
q.add(20)
q.add(30)
q.add(40)
q.add(50)
q.display()
q.remove()
q.display()
console.log(q.show());
