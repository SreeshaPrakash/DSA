// stack that maintains an increasing/decreasing order of elements
// monotonic increasing stack - stack that maintains an increasing order in inserting elements
// monotonic decreasing stack - stack that maintains a decreasing order in inserting elements

class Stack{
    constructor(){
        this.items = []
    }

    add(value){
        while(this.items.length >0 && this.items[this.items.length-1] > value){
            this.remove();
        }
        this.items.push(value)
    }
    
    remove(){
        return this.items.pop()
    }

    display(){
        console.log(this.items.join(' '))
    }
}

const st = new Stack()
st.add(20)
st.add(30)
st.add(19)
st.add(15)
st.add(18)
st.display()