class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root  = null;
    }

    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node;
            return;
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node;
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(!root.right){
                root.right = node
            } else {
                this.insertNode(root.right , node)
            }
        }
    }


    preorder(root = this.root){
        if(!root)return;
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
    }

    inorder(root = this.root){
        if(!root)return
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }

    count(root = this.root){
        if(!root) return 0;
        return 1+ this.count(root.left) + this.count(root.right)
    }

    countLeafNode(root = this.root){
        if(!root)return 0;
        if(!root.left && !root.right)return 1;
        return this.countLeafNode(root.left) + this.countLeafNode(root.right)
    }

    countLeftNode(root  = this.root){
        if(!root) return 0;
        let count = 0;
        if(root.left){
            count = 1 + this.countLeftNode(root.left)
        }
        count += this.countLeftNode(root.right)
        return count
    }

    findMin(root = this.root){
        if(!root)return null;
        while(root.left){
            root = root.left
        }
        return root.value
    }



    findLeaNode(root = this.root, result = []){
        if(!root) return result;
        if(!root.left && !root.right) result.push(root.value);
        this.findLeaNode(root, root.left)
        this.findLeaNode(root, root.right)

        return result
    }


    height(root = this.root){
        if(!root) return 0;
        const leftHeight =  this.height(root.left)
        const rightHeight = this.height(root.right)
        return Math.max(leftHeight, rightHeight) + 1
    }



}


const t = new BSTree()
t.insert(40)
t.insert(20)
t.insert(50)
t.insert(60)
t.insert(10)
t.insert(45)
t.preorder()

console.log("Preorder:");
t.preorder();

console.log("\nCount of all nodes:", t.count());
console.log("Count of leaf nodes:", t.countLeafNodes());
console.log("Count of left nodes:", t.countLeftNodes());
console.log("All leaf nodes:", t.findLeafNodes());
console.log("Minimum value:", t.findMin());
console.log("3rd largest node:", t.nthLargest(3));

t.delete(50);
console.log("\nAfter deleting 50:");
t.preorder();

