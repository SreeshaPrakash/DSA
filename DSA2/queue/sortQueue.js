
class Queue{
    constructor(){
        this.que = [4,1,3,2,5]
    }

    sort(){
        if(this.que.length == 0) return;
        const temp = this.que.shift()
        this.sort()
        this.insertSort( temp)
    }

    insertSort(value){
        if(this.que.length == 0 || value < this.que[0]){
            this.que.unshift(value)
            return;
        }
        const temp = this.que.shift()
        this.insertSort(value)
        this.que.unshift(temp);

    }

    display(){
        console.log(this.que.join(' '));
        
    }
}
const q = new Queue()
q.display()
q.sort()
q.display()