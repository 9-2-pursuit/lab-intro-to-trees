class TreeNode { // a single node
  constructor(data = null) { //default value of data for node is null
    this.data = data; //data stores the data of the node 
    this.children = []; //stores a (reference) to the child node
    /**The constructor method sets the data property to the argument passed to it (or null if no argument is passed) and initializes the children array to be empty. The array does not store thier current vlaues but only a reference */
    /**
      null
       /\
       []

     */
  }
}

class Tree {//tree structure

  constructor(node) {//root node
    /**Tree is a class that represents the entire tree. It has one property: root, which is the root node of the tree.  the node argument is used to (define the root) of the tree in this method. */
    this.root = node;
    //root is the PROPERTY NAME used to reference the data of a node

 
  }

  findNode(data,node = this.root) { //the root node is passed to the findNode method to traverse the tree and search for the node that references the data
 
   

 
    if(node.data === data){ 
      return node
    }

    
    for(let child of node.children){
      let currentNode = this.findNode(data, child)
      if(currentNode){
        return currentNode
      }
    }
    return null
  
 

  }}
 

  // const rootNode = new TreeNode(2)
  
  // const theTree = new TreeNode(rootNode)
  // console.log(theTree)


let tree = new Tree(new TreeNode(3));
console.log(tree.root)
// tree.root.children.push(6,9)

console.log(tree.root.children)




module.exports = { TreeNode, Tree };
