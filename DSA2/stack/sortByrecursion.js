class Stack{
    constructor(){
        // this.items = [2,5,3,7,9,4]
        this.items = [2,1,3,4,1]
    }

    sort(stack  = this.items){
        if(stack.length === 0) return ;
        const temp = stack.pop()
        this.sort(stack);
        this.insert4sort(stack, temp)
    }

    insert4sort(stack, value){
        if(stack.length === 0 || value > stack[stack.length-1]){
            stack.push(value);
            return;
        }
        const temp = stack.pop()
        this.insert4sort(stack, value);
        stack.push(temp);
    }

    print(){
        console.log(this.items)
    }
}
const st = new Stack()
st.print()
st.sort(this.items)
st.print()


