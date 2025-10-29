class Stack{
    constructor(){
        this.items = [1,2,3,4,5]
        
    }

    reverse(){
      const stack = []

      while(this.items.length > 0){
        stack.push(this.items.pop())
      }
        this.items = stack
    }

    display(){
        console.log(this.items.join(' '));
        
    }
}
const st  = new Stack()
st.display()
st.reverse()
st.display()
