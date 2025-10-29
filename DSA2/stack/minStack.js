class Stack{
    constructor(){
        this.stack = []
        this.minStack  = []
    }

    add(value){
        this.stack.push(value)
        if(this.minStack.length == 0 || value <= this.getMin()){
            this.minStack.push(value)
        }
    }
    
    remove(){
        const removed =  this.stack.pop()
        if(removed === this.getMin()){
            this.minStack.pop()
        }
        return removed
    }

    getMin(){
        return this.minStack[this.minStack.length-1]
    }

    display(){
       console.log( this.stack.join(' '));
       
    }
}

const st = new Stack()
st.add(12)
st.add(8)
st.add(5)
st.add(4)
st.add(9)
console.log(st.getMin());
st.add(2)
st.display()
console.log(st.getMin());