
// class Hashtable{
//     constructor(){
//         this.table = new Array(10);
//         this.size = 0;
//     }

//     tableSize(){
//         return this.table.length
//     }

//     hash(key){
//         let hash = 0;
//         for(let i=0; i<key.length;i++){
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.tableSize()
//     }


//     set(key, value){
//         const index = this.hash(key);
//         this.table[index] = value;
//     }

//     get(key){
//         const index = this.hash(key);
//         return this.table[index] 
//     }
    

//     print(){
//         this.table.forEach((p,i)=>{
//             console.log(i,p)
//         })
//     }
    
// }

// const table = new Hashtable()
// table.set('name', 'sreesha')
// // table.set('name', 'varun')
// table.set('age', 23)
// table.set(true, 40)
// console.log(table.get('age'))
// console.log(table.get('name'))
// table.print()





class Hashtable{
    constructor(){
        this.table = new Array(10);
        this.usedsize = 0
    }

    tableSize(){
        return this.table.length
    }

    hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash% this.tableSize()
    }

    set(key, value){
        let index = this.hash(key);
        this.table[index] = value;
        this.usedsize++;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
        this.usedsize--;
    }

    print(){
        this.table.forEach((p,i)=>{
            console.log(i, p);
            
        })
    }
}


const table = new Hashtable()
table.set('name' ,'sreesha')
table.set('age', 23)
table.set('address', 'plkd')
console.log(table.get('name'));
table.print()
console.log(table.usedsize);







