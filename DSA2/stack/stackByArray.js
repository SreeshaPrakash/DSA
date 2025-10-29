
class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    add(value){
        return this.items.push(value)
    }

    remove(){
        return this.items.pop()
    }

    show(){
        return this.items[this.items.length-1]
    }

    getMax(){
        return Math.max(...this.items)
    }

    getMin(){
        return Math.min(...this.items)
    }

    print(){
        console.log(this.items.join(' '))
    }
    contains(value){
        return this.items.includes(value)
    }

}

let st = new Stack()
st.add(10)
st.add(20)
st.add(30)
st.add(40)
st.add(50)
st.print()
st.remove()
st.print()
console.log(st.getMax());
console.log(st.getMin());
console.log(st.size());
console.log(st.show());
