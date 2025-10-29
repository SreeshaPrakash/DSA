//map
//map is considered as a built-in hashtable as it acts like hashtable that stores key-value pairs in insertion order
// it has built-in methods like set, get, has, delete, size




const datas = new Map();


datas.set('name', 'sreesha')                             //set
datas.set('nema', 'anu')
datas.set(true, 'alive')
datas.set({'address':"place"}, 'plkd')
console.log(datas.get('name'))                           //get
console.log(datas.get('place'))
console.log(datas.get(true))
datas.delete('nema')                                     //delete
console.log(datas.get('nema'))
console.log(datas.size)                                  //size
console.log(datas)
console.log(datas.has('name'))  //key                    //has