class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = []
  
  }
}

class Tree {
  constructor(node) {
    this.root = node
  }

findNode(data, currentNode = this.root) {
if (currentNode === null) {
  return null
}
else if(currentNode.data === data){
  return currentNode
}
else {
  let arr = currentNode.children
for (let child of arr ) {
  let found = this.findNode(data, child)
 if (found !== null) {
  return found
 }
}
return null
}

}

}

// class Tree {
//   constructor(node) {
//     this.root = node;
//   }

//   findNode(data) {
//     let checkNodes = [this.root]
  
//   while (checkNodes[0]) {
//     if (data === checkNodes[0].data){
//       return checkNodes[0]
//     }
//     else {
//       for (let i of checkNodes[0].children) {
//         checkNodes.push(i)
//       } 
//       checkNodes.shift();
//     }
    
//   }
//   return null 
//   }
// }

module.exports = { TreeNode, Tree };

// let currentNode = this.root;
  
//   while(currentNode) {
//     if(data === currentNode.value) {
//       return currentNode.value
//     }
//     else if (data < currentNode.value) {
//       currentNode = currentNode.left
//     }
//     else {
//       currentNode = currentNode.right;
//     }
//   }
  