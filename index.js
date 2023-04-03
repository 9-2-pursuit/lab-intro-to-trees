class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    return this.findNode_recusive(data);
  }

  /////////////////////////////////////////////
  findNode_while(data) {
    let stack = [this.root];
    while(stack.length>0){
      let node = stack.pop();
      if(node.data === data) return node;
      stack.push(...node.children);
    }
    return null;
  }
  /////////////////////////////////////////////
  findNode_recusive(data) {
    return check_node(this.root);
    function check_node(node){
      if(node.data === data) return node;
      for(let child of node.children){
        let found = check_node(child);
        if(found!==null) return found;
      }
      return null;
    }
  }
}




///for future may needed/////////////////////////////////////////
// class BinaryTreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(val) {
//     const node = new BinaryTreeNode(val);
//     if (this.root == null) {
//       this.root = node;
//     } else {
//       this._insertNode(this.root, node);
//     }
//   }

//   _insertNode(currentNode, node) {
//     if (node.val < currentNode.val) {
//       if (currentNode.left == null) {
//         currentNode.left = node;
//       } else {
//         this._insertNode(currentNode.left, node);
//       }
//     } else {
//       if (currentNode.right == null) {
//         currentNode.right = node;
//       } else {
//         this._insertNode(currentNode.right, node);
//       }
//     }
//   }

//   search(val) {
//     return this._searchNode(this.root, val);
//   }

//   _searchNode(currentNode, val) {
//     if (currentNode == null) {
//       return false;
//     }
//     if (currentNode.val === val) {
//       return true;
//     }
//     if (val < currentNode.val) {
//       return this._searchNode(currentNode.left, val);
//     } else {
//       return this._searchNode(currentNode.right, val);
//     }
//   }

//   delete(val) {
//     this.root = this._deleteNode(this.root, val);
//   }

//   _deleteNode(currentNode, val) {
//     if (currentNode == null) {
//       return null;
//     }
//     if (val < currentNode.val) {
//       currentNode.left = this._deleteNode(currentNode.left, val);
//     } else if (val > currentNode.val) {
//       currentNode.right = this._deleteNode(currentNode.right, val);
//     } else {
//       if (currentNode.left == null) {
//         return currentNode.right;
//       } else if (currentNode.right == null) {
//         return currentNode.left;
//       } else {
//         let temp = this._findMinNode(currentNode.right);
//         currentNode.val = temp.val;
//         currentNode.right = this._deleteNode(currentNode.right, temp.val);
//       }
//     }
//     return currentNode;
//   }

//   _findMinNode(node) {
//     while (node.left != null) {
//       node = node.left;
//     }
//     return node;
//   }
// }
// /////////////////////////////////////////////////
// const tree = new BinaryTree();

// // Insert some nodes
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(2);
// tree.insert(4);
// tree.insert(6);
// tree.insert(8);

// // Search for a node
// console.log(tree.search(4)); // Output: true

// // Delete a node
// tree.delete(3);
// console.log(tree)

module.exports = { TreeNode, Tree };
