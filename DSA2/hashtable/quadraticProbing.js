

// class quadraticProbing{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = 0;
//     }

//     tableSize(){
//         return this.table.length
//     }

//     hash(key){
//         let hash = 0;
//         for(let i=0; i<key.length; i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.tableSize()
//     }

//     set(key, value){
//         let index = this.hash(key);
//         let i=0;
//         while( this.table[ (index + i*i) % this.tableSize()] !== undefined && 
//         this.table[(index + i*i) % this.tableSize()][0] !== key){
//             i++;
//         }
//         let newIndex = (index + i*i)% this.tableSize();
//         this.table[newIndex] = [key, value];
//         this.size++;
//     }
    
//     get(key){
//         let index = this.hash(key);
//         let i=0;
//         while(this.table[(index +i*i) % this.tableSize()]!== undefined){
//             let currentIndex = (index +i*i)% this.tableSize();
//             if(this.table[currentIndex][0] == key){
//                 return this.table[currentIndex][1];
//             }
//             i++;
//         }
//         return undefined;
//     }

//     remove(key){
//         let index = this.hash(key)
//         let i=0;
//         while(this.table[(index + i*i )%this.tableSize()] !== undefined){
//             let currentIndex = (index+i*i)%this.tableSize();
//             if(this.table[currentIndex][0] == key){
//                 this.table[currentIndex] = undefined;
//                 this.size--;
//                 return;
//             }
//             i++;
//         }
        
//     }

//     print(){
//         this.table.forEach((p,i)=>{
//             console.log(i,p);
            
//         })
//     }

// }

// const table = new quadraticProbing(100)
// table.set('name', 'sreesha')
// table.set('nema', 'anu')
// table.set('aemn', 'varun')
// table.set('age', 23)
// table.set('gea', 45)
// table.set('eag', 34)
// table.set(true, 'alive')
// table.set(23, 'age')
// console.log('table size:' + table.tableSize())
// console.log(table.get('nema'));
// console.log(table.get(true));
// console.log(table.get(23));
// table.print()
// table.remove('gea')
// table.set('aeg', 100)
// table.print()
// console.log('table size:' + table.tableSize())







// class quadraticProbing{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = 0;
//         this.currCount = 0
//     }

//     currSize(){         //number of pairs inserted
//         return this.currCount;
//     }

//     tableSize(){          //total number of whole space in table
//         return this.table.length
//     }

//     hash(key){
//         let hash = 0;
//         for(let i=0; i<key.length; i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.tableSize()
//     }

//     set(key, value){
//         let index = this.hash(key);
//         let i=0;
//         while( this.table[ (index + i*i) % this.tableSize()] !== undefined && 
//         this.table[(index + i*i) % this.tableSize()][0] !== key){
//             i++;
//         }
//         let newIndex = (index + i*i)% this.tableSize();
//         this.table[newIndex] = [key, value];
//         this.currCount++;
//     }
    
//     get(key){
//         let index = this.hash(key);
//         let i=0;
//         while(this.table[(index +i*i) % this.tableSize()]!== undefined){
//             let currentIndex = (index +i*i)% this.tableSize();
//             if(this.table[currentIndex][0] == key){
//                 return this.table[currentIndex][1];
//             }
//             i++;
//         }
//         return undefined;
//     }

//     remove(key){
//         let index = this.hash(key)
//         let i=0;
//         while(this.table[(index + i*i )%this.tableSize()] !== undefined){
//             let currentIndex = (index+i*i)%this.tableSize();
//             if(this.table[currentIndex][0] == key){
//                 this.table[currentIndex] = undefined;
//                 this.currCount--;
//                 return;
//             }
//             i++;
//         }
        
//     }

//     print(){
//         this.table.forEach((p,i)=>{
//             console.log(i,p);
            
//         })
//     }

// }

// const table = new quadraticProbing(100)
// table.set('name', 'sreesha')
// table.set('nema', 'anu')
// table.set('aemn', 'varun')
// table.set('age', 23)
// table.set('gea', 45)
// table.set('eag', 34)
// table.set(true, 'alive')
// table.set(23, 'age')
// console.log('table size:' + table.tableSize())
// console.log(table.get('nema'));
// console.log(table.get(true));
// console.log(table.get(23));
// table.print()
// table.remove('gea')
// table.set('aeg', 100)
// table.print()
// console.log('table size:' + table.tableSize())
// console.log('table size:' + table.currSize())






class Hashtable{
    constructor() {
        this.table  = new Array(10);
        this.usedsize = 0;
    }

    tablesize(){
        return this.table.length;
    }

    hash(key){
        let hash  = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.tablesize()
    }


   

    set(key, value){
        let index = this.hash(key);
        let i=0;
        while(this.table[ (index + i*i)%this.tablesize()] !==undefined && this.table[ (index + i*i)%this.tablesize()][0]!== key){
            i++;
        }
        let newIndex = (index + i*i) % this.tablesize()
        this.table[newIndex] = [key, value]
        this.usedsize++;
    }

    get(key){
        let index = this.hash(key)
        let i=0;
        while( this.table[(index + i*i)%this.tablesize()] !== undefined){
            let currIndex = (index + i*i)%this.tablesize()
            if(this.table[currIndex][0] == key){
                return this.table[currIndex][1];
            }
        i++;
        }
        return undefined;
    }

    remove(key){
        let index = this.hash(key);
        let i=0;
        while( this.table[(index + i*i)%this.tablesize()] !== undefined ){
            let currIndex = (index + i*i)%this.tablesize()
            if(this.table[currIndex][0] == key){
                this.table[currIndex][1] = undefined
            }
            i++;
        }
        this.usedsize--;
    }

    print(){
        this.table.forEach((p,i)=>{
            console.log(i,p);
            
        })
    }

}


const table = new Hashtable()
table.set('name' , 'sreesha')
table.set('nema', 'anu')
table.set('eamn', 'aju')
table.set('age', 23)
table.set('aeg', 24)
console.log(table.get('aeg'));
console.log(table.get('nema'));
console.log(table.usedsize);
table.print()
table.remove('nema')
console.log('removed:');

table.print()





