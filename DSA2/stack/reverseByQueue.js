class Stack{
    constructor() {
        this.stack = [3,5,2,7,8]
    }

    reverse(){
        const queue = []
        while(this.stack.length > 0){
        queue.push(this.stack.pop())
        }
        
        while(queue.length > 0){
            this.stack.push(queue.shift())
        }
 }

 display(){
    console.log(this.stack.join(' '));
    
 }
}
const st = new Stack()

st.display()
st.reverse()
st.display()


