class Stack{
    constructor(){
        this.items = [1,2,3,4]
    }
    

      remove4reverse(stack = this.items) {
        if(stack.length == 0)return;
        const temp = stack.pop();
        this.remove4reverse(stack);
        this.insert4reverse(stack, temp)
   }

   insert4reverse(stack, value){
    if(stack.length == 0 ){
        stack.push(value);
        return;
    }
    const temp = stack.pop();
    this.insert4reverse(stack, value);
    stack.push(temp);
   }

   print(){
    console.log(this.items)
   }
   
}

const st = new Stack()
st.print()
st.remove4reverse(this.items)
st.print()
