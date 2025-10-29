// // create heap by inserting values
// // minHeap

// class Heap{
//     constructor(){
//         this.heap = [];
//     }   

//     parentIndex(index){
//         return Math.floor((index-1)/2);
//     }

//     insert(value){
//         this.heap.push(value);
//         this.heapifyDown(this.heap.length-1)

//     }

//     heapifyDown(index){
//         if(index === 0) return ;
//         let parent = this.parentIndex(index)
//         if(this.heap[index] < this.heap[parent]){
//             [this.heap[index], this.heap[parent]]  = [this.heap[parent] , this.heap[index]]
//         }
//         this.heapifyDown(parent)
//     }

//     display(){
//         console.log(this.heap)
//     }
// }

// const heap = new Heap()
// heap.insert(90)
// heap.insert(34)
// heap.insert(23)
// heap.insert(78)
// heap.insert(46)
// heap.insert(36)
// heap.display()




class Heap{
    constructor(){
        this.heap = []
    }

    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    

    insert(value){
        this.heap.push(value)
        this.heapifyDown(this.heap.length-1)
    }


    heapifyDown(index){
        let parent  = this.parentIndex(index)
        if(this.heap[index] < this.heap[parent]){
            [this.heap[index] , this.heap[parent]]  = [this.heap[parent] , this.heap[index]]
        }
        this.heapifyDown(parent)
    }


    display(){
        console.log(this.heap);
    }

    

}
const heap = new Heap()
heap.insert(40)
heap.insert(20)
heap.insert(50)
heap.display()




