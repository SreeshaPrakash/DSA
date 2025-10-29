
class Stack{
    constructor(){
         this.items = [3,4,7,2,8]
    }

    nthlargest(n){
        let temp  = [...this.items].sort((a,b)=> a-b);
        return temp[n-1];
    }

    nthsmallest(n){
        let temp = [...this.items].sort((a,b)=> b-a);
        return temp[n-1];
    }
}
const st = new Stack();
console.log(st.nthlargest(2));
console.log(st.nthsmallest(2));

