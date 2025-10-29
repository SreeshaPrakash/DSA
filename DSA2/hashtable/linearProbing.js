

// // // ********* LinearProbing *********//



// class linearProbing{
//     constructor(size){
//         this.table = new Array(size)
//         this.size =0;
//     }

//     tableSize(){
//         return this.table.length;
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

//         while(this.table[index] !== undefined && this.table[index][0] !== key){
//                 index = ( index+1)%this.tableSize()
//         }
//         this.table[index] = [key, value];
//         this.size++;
//     }

//     get(key){
//         let index = this.hash(key);
//         while(this.table[index] !== undefined){
//             if(this.table[index][0] == key){
//                 return this.table[index][1]
//             }
//              index = (index + 1)% this.tableSize();
//         }
//        return undefined;
//     }

//     remove(key){
//         let index  = this.hash(key)

//         while(this.table[index] !== undefined){
//             if(this.table[index][0] == key){
//                 this.table[index] = undefined;
//                 return;
//             }
//             index = (index + 1) % this.tableSize();
//         }
//         this.size--;
//     }

//     print(){
//         this.table.forEach((k,i)=> {
//             console.log(i,k);
            
//         })
//     }
// }

// const table = new linearProbing(100);

// table.set("name", "Suiii");
// table.set("mane", "Sulum");
// table.set("age", "25");
// table.set("gae", "30");
// table.set("place", "VPZ");
// table.set("suiand", "ronrornror");
// table.print()
// table.remove('age')
// table.print()
// // console.log(table.tableSize());





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
        while(this.table[index] !==undefined && this.table[index][0]!== key){
            index = (index +1)% this.tablesize();
        }
        this.table[index] = [key, value]
        this.usedsize++;
    }

    get(key){
        let index = this.hash(key)
        while( this.table[index] !== undefined){
            if(this.table[index][0] == key){
                return this.table[index][1];
            }
            index = (index +1) % this.tablesize()
        }
        return undefined;
    }

    remove(key){
        let index = this.hash(key)
        while( this.table[index] !== undefined ){
            if(this.table[index][0] == key){
                this.table[index][1] = undefined
            }
            index = ( index + 1) % this.tablesize()
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
