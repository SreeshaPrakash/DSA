
class Stack{
    constructor(){
        this.items = [2,3,4,5,6]
    }

    search(stack = this.items, val){
        let tempst = []
        let found = false;

        while(stack.length !== 0){
            let top = stack.pop()

              if(top === val){
                found = true;
             }
              tempst.push(top)
        }
      

       
        while(tempst.length !== 0){
            stack.push(tempst.pop())
        }
        return found;
    }


}
const st = new Stack;
console.log(st.search(st.items, 3));
console.log(st.search(st.items, 30));
