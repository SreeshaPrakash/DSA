// this is implimentation of minheap 
// or building heap from array
// or heapifyDown



class Heap{
    constructor(array  = []){
        this.heap = array
        this.buildHeap()
    }


    parentIndex(index){
        return Math.floor((index-1)/2)
    }

    leftIndex(index){
        return (2* index) +1
    }

    rightIndex(index){
        return (2* index) +2
    }

    peep(){
        return this.heap[0]
    }

    buildHeap(){
        for(let i=Math.floor(this.heap.length/2)-1; i>=0; i--){
            this.heapifyDown(i)
        }
    }

    heapifyDown(index){
        let smallest = index;
        let left = this.leftIndex(index)
        let right = this.rightIndex(index)


        if(left < this.heap.length  &&  this.heap[left] < this.heap[smallest]  ){
            smallest = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right;
        }

        if(smallest !== index){
            [this.heap[smallest] , this.heap[index]]  = [this.heap[index], this.heap[smallest]];
            this.heapifyDown(smallest);
        }

    }

    remove(){
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
    }

    

    display(){
        console.log(this.heap)
    }


     extractMin(){
                if(this.heap.length == 0) return null
                if(this.heap.length == 1) return this.heap.pop()

                const min = this.heap[0]
                this.heap[0] = this.heap.pop()
                this.heapifyDown(0)

                return min;
    }

    heapsort(){
        const result  = []

         while(this.heap.length > 0){
            result.push(this.extractMin())
         }

         return result;
    }



}
let array = [30,20,50,56,79,10]
const minHeap = new Heap(array)
minHeap.display()






