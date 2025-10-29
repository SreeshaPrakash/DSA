
    // //seperate chaining - one of the collision handling methods
    // //creates an array / linkedlist which allows to insert multiple key-value pairs in the same index which avoid collision.


    // class Hashtable{
    //     constructor(){
    //         this.table = new Array(10)
    //         this.size = 0;
    //     }

    //     tableSize(){
    //         return this.table.length;
    //     }

    //     hash(key){
    //         let hash = 0;
    //         for(let i=0; i<key.length; i++){
    //              hash += key.charCodeAt(i)
    //         }
    //         return hash % this.tableSize()
    //     }

    //     set(key, value){
    //         const index = this.hash(key);
    //         if(!this.table[index]){
    //             this.table[index] = [];             //creates an array at each index to store multiple key-values;
    //         }
    //         for(let pair of this.table[index]){
    //             if(pair[0] == key){
    //                 pair[1] = value;
    //                 return 
    //             }
    //         }

    //         this.table[index].push([key, value])
    //         this.size++;
    //     }

    //     get(key){
    //         const index = this.hash(key);
    //         for(let pair of this.table[index]){
    //             if(pair[0] == key){
    //                 return pair[1]
    //             }
    //         }
    //         return false;
    //     }

    //     remove(key){
    //         let index = this.hash(key);
    //         if(this.table[index]){
    //             for(let i=0; i<this.table[index].length; i++){
    //             if(this.table[index][i][0] ==key ){
    //                 this.table[index].splice(i,1);
    //                 return;
    //             }
    //         }
    //         }
    //     }

    //     display(){
    //         this.table.forEach((p,i)=>{
    //             console.log(i,p);
    //         })
    //     }
    // }

    // const table = new Hashtable();
    // table.set('name' , 'sreesha');
    // table.set('age', 23)
    // table.set(true, 21)
    // table.set( 40, 'level' );
    // console.log( table.get('age'));
    // console.log(table.get('name'));
    // console.log(table.display())
    // table.remove('name')
    //  console.log(table.display())
    



    


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
       if(!this.table[index]){
            this.table[index] = []
       }
       for(let pair of this.table[index]){
            if(pair[0]  == key){
                pair[1] == value;
                return;
            }
       }
       this.table[index].push([key, value]);
       this.usedsize++;

    }

    get(key){
        let index = this.hash(key);
        for(let pair of this.table[index]){
            if(pair[0] == key){
                return pair[1];
            }
        }
        return false;
    }

    remove(key){
        let index = this.hash(key)
       for(let pair of this.table[index]){
        if(pair[0] == key){
            this.table[index].splice(pair, 1)
        }
       }
    // for(let i=0; i<this.table.length; i++){
    //     if(this.table[index][i][0] == key ){
    //         this.table[index].splice(i, 1);
    //         return;
    //     }
    // }
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
table.set('naem' ,'sreha')
table.set('age', 23)
table.set('address', 'plkd')
console.log(table.get('name'));
table.print()
console.log(table.usedsize);
table.remove('naem')
table.print()







