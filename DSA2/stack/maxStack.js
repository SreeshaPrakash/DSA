class Stack{
    constructor(){
        this.stack = []
        this.maxStack  = []
    }

    add(value){
        this.stack.push(value)
        if(this.maxStack.length == 0 || value >= this.getMax()){
            this.maxStack.push(value)
        }
    }
    
    remove(){
        const removed =  this.stack.pop()
        if(removed === this.getMax()){
            this.maxStack.pop()
        }
        return removed
    }

    getMax(){
        return this.maxStack[this.maxStack.length-1]
    }

    display(){
       console.log( this.stack.join(' '));
       
    }
}

const st = new Stack()
st.add(2)
st.add(8)
st.add(5)
st.add(4)
console.log(st.getMax());
st.add(9)
st.add(2)
st.display()
console.log(st.getMax());