class Node{
    constructor(value){
        this.value =value;
        this.left = null;
        this.right = null;
    }
}

class BTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return
        }

        const queue = [this.root]
        while(queue.length){
            const node = queue.shift()

            if(!node.left){
                node.left = newNode;
                return;
            } else if(!node.right){
                node.right = newNode;
                return;
            } else {
                queue.push(node.left, node.right)
            }
        }
    }


    // preorder(node =this.root){
    //     if(!node) return;
    //     console.log(node.value);
    //     console.log(node.left.value);
    //     console.log(node.right.value);            
    // }




    search(value , root = this.root){
        if(!root)return false;
        if(root.value == value)return true;
        return this.search(root.left, value) || this.search(root.right, value);
    }

    height(root = this.root){
        if(!root) return 0;
        return 1 + Math.max(this.height(root.left), this.height(root.right))
    }

    count(root = this.root){
        if (!root) return 0;
        return 1 + this.count(root.left) + this.count(root.right)
    }


    degreeOfNode(value, root = this.root){
        if(!root) return null;
       let queue  = [root];
       while(queue.length > 0){
        let node = queue.shift();
        if(node.value == value){
            let degree = 0;
            if(node.left) degree++;
            if(node.right )degree++;
            return degree
        }

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right)
       }

       
    }


    preorder(root = this.root){
        if(!root) return;
        console.log(root.value);
        this.preorder(root.left);
       this.preorder(root.right);            
    }

   levelOrder(root = this.root){
    if(!root) return;
    let count = 0;
    const queue = [root]
    while(queue.length >0){
        const node = queue.shift()
        count++;
        console.log(node.value);

        if(node.left)queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
   }

   delete(value){
    if(!this.root)return null;

    if(!this.root.left && !this.root.right){
        if(this.root.value == value ){
            return this.root = null;
        }
    }

    let queue  = [ this.root];
    let nodeToDel = null;
    let lastNode = null;
    let parentOfLast = null;

    while(queue.length > 0){
        let node =  queue.shift();

        if(node.value == value)  nodeToDel = node;
        if(node.left){
            parentOfLast = node;
            queue.push(node.left)
        }
        if(node.right){
            parentOfLast = node;
            queue.push(node.right);
        }

        lastNode = node;
    }

    if(!nodeToDel) return 'node not found';
    nodeToDel.value  = lastNode.value;
    if(parentOfLast.right == lastNode) parentOfLast.right = null;
    else parentOfLast.left = null;  

   }
}

const t = new BTree()
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(40)
t.insert(50)
t.insert(70)
// t.preorder()
t.levelOrder()

console.log('count:' + t.count())
t.delete(50)
console.log('tree after deletion');
t.levelOrder()
console.log('count:' + t.count())



console.log('degree of node:' +t.degreeOfNode(20));
console.log('degree of node:' +t.degreeOfNode(40));


console.log(t.search(30))
// console.log(`height: ${t.height()}`)




