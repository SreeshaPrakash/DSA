class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }

        node.isEndOfWord = true;
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]) return false;
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return false;
            node = node.children[char]
        }
        return true
    }

    delete(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char])return -1;
            node = node.children[char]
        }
        if(node.isEndOfWord){
            node.isEndOfWord = false;
            return true
        }
        return -1
    }

  

    autoCompletion(word){
        let result = []
        let node = this.root;


        for(let char of word){
            if(!node.children[char])return result;
            node = node.children[char]
        }


        function dfs(currNode, currWord){
            if(currNode.isEndOfWord){
                result.push(currWord)
            }

            for(let char in currNode.children ){
                dfs(currNode.children[char], currWord + char)
            }
        }

        dfs(node, word)
        return result;
    }


  print(){
    function dfs(node, word){
        if(node.isEndOfWord){
            console.log(word)
        }
        for(let char in node.children){
            dfs(node.children[char], word+char)
        }
    }
    dfs(this.root, "")
  }


  longestPrefix(word){
        let node = this.root;
        let prefix = ""
        let longest = ""

        for(let char of word){
            if(node.children[char]){
                prefix += char
                node = node.children[char];

                if(node.isEndOfWord){
                    longest = prefix
                }
            }
        }
        return longest
  }



}

const trie = new Trie()
trie.insert('hello')
trie.insert('hallow')
trie.insert('hollow')
trie.insert('hell')
trie.insert('hollcano')
console.log(trie.search('hello'));
console.log(trie.search('helllo'));
console.log(trie.startsWith('hel'));


console.log(trie.autoCompletion('hol'));


trie.print()
console.log(trie.longestPrefix('hollowww'))