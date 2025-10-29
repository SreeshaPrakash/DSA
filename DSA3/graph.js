

// class Graph{
//     constructor(){
//         this.adjList = {};
//     }

//     addVertex(vertex){
//         if(!this.adjList[vertex]){
//             this.adjList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(!this.adjList[vertex1]) this.addVertex(vertex1);
//         if(!this.adjList[vertex2]) this.addVertex(vertex2);

//         this.adjList[vertex1].push(vertex2);
//         this.adjList[vertex2].push(vertex1);
//     }

//     removeEdge(vertex1, vertex2){
//     if(this.adjList[vertex1])
//         this.adjList[vertex1] = this.adjList[vertex1].filter(v => v !== vertex2);
//     if(this.adjList[vertex2])
//         this.adjList[vertex2] = this.adjList[vertex2].filter(v => v !== vertex1);
//     }

//     removeVertex(vertex){
//         while(this.adjList[vertex] && this.adjList[vertex].length){
//             const adjvertex = this.adjList[vertex].pop()
//             this.removeEdge(vertex, adjvertex)
//         }
//         delete this.adjList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjList){
//             console.log(vertex + " -> " + this.adjList[vertex])
//         }
//     }




//     dfs(start){
//         let visited = new Set()
//         console.log(start)
//         visited.add(start)

//         for(let vertex of this.adjList[start]){
//             if(!visited.has(vertex)){
//                 this.dfs(vertex)
//             }
//         }
//     }



//     bfs(start){
//         let queue = [start]
//         let visited = new Set()
//         visited.add(start)

//         while(queue.length){
//             let currVertex = queue.shift()
//             console.log(currVertex)

//             for(let adjVertex of this.adjList[currVertex]){
//                 if(!visited.has(adjVertex)){
//                     visited.add(adjVertex)
//                     queue.push(adjVertex)
//                 }
//             }
//         }
//     }


//     // isCyclic(){
//     //     let visited = new Set()

//     //     let dfs  = (vertex, parent)=>{
//     //         visited.add(vertex)

//     //         for(let neighbour of this.adjList[vertex]){
//     //             if(dfs(neighbour, vertex)) return true;
//     //             else {
//     //                 if(neighbour !== parent) return true;
//     //             }


//     //         }
//     //                 return false;
//     //     }

//     // }
    


// }
// const gr = new Graph()
// gr.addVertex(1)
// gr.addVertex(2)
// gr.addVertex(3)
// gr.addVertex(4)

// gr.addEdge(1,2)
// gr.addEdge(2,3)
// gr.addEdge(3,4)
// gr.addEdge(4,1)
// gr.display()

// gr.addVertex(5)
// gr.removeVertex(2)
// // gr.removeEdge(1)
// gr.display()


// gr.bfs(1)




























class Graph{
    constructor(){
        this.adjList = {}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjList[vertex1]) this.addVertex(vertex1);
       if(!this.adjList[vertex2]) this.addVertex(vertex2)


       this.adjList[vertex1].push(vertex2)
       this.adjList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2){
        if(this.adjList[vertex1]){
            this.adjList[vertex1]= this.adjList[vertex1].filter(v=> v!==vertex2)
        }
        if(this.adjList[vertex2]){
          this.adjList[vertex2]=  this.adjList[vertex2].filter(v=> v== vertex1)
        }
    }

    removeVertex(vertex){
        while(this.adjList[vertex] && this.adjList[vertex].length){
           const currVertex = this.adjList[vertex].pop()
            this.removeEdge(vertex, currVertex)
        }
        delete this.adjList[vertex]
    }


    dfs(start, visited = new Set()){
         
        console.log(start);
        visited.add(start)

        for(let neighbour of this.adjList[start]){
            if(!visited.has(neighbour)){
             this.dfs(neighbour, visited)
            }
        }
    }



    bfs(start){
        let queue = [start]
        let visited = new Set()
        visited.add(start)

        while(queue.length){
            let currVertex = queue.shift()
            console.log(currVertex);

            for(let adjVertex of this.adjList[currVertex]){
                if(!visited.has(adjVertex)){
                    visited.add(adjVertex)
                    queue.push(adjVertex)
                }
            }
            
        }
    }



    print(){
        for(let vertex in this.adjList){
            console.log(vertex + ' -> ' + this.adjList[vertex])
        }
    }
}

const gr = new Graph()
gr.addVertex('A')
gr.addVertex('B')
gr.addVertex('C')
gr.addVertex('D')
gr.addVertex('E')

// gr.addEdge('A', 'B')
// gr.addEdge('B', 'C')
// gr.addEdge('C', "A")


gr.addEdge('A', 'B')
gr.addEdge('A', 'C')
gr.addEdge('B', 'D')
gr.addEdge('B', 'E')

console.log('grapg:');
  gr.print()

console.log('bfs:' );
gr.bfs('A')

console.log('dfs:');
gr.dfs("A")




    