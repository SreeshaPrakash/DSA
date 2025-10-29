class Stack{
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    add(value){
        this.q1.push(value)
    }

    remove(){
       while(this.q1.length >1){
            this.q2.push(this.q1.shift())
       }
       const removed = this.q1.shift();

       while(this.q2.length >0){
        this.q1.push(this.q2.shift())
       }
       return removed
    }

    display(){
        console.log( this.q1.join(' ') )
    }

    show(){
        return this.q1[0]
    }

}

const st = new Stack()
st.add(10)
st.add(20)
st.add(30)
st.add(40)
st.add(50)
st.display()
st.remove()
st.display()
console.log(st.show());
