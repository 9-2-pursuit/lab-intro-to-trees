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
    let checkNodes = [this.root];

    while (checkNodes.length > 0) {
      //initialized the checkNodes with the root node of the tree, which then enters a while loop that runs as long as there are still nodes in the checkNodes.

      let current = checkNodes.shift();  //Assigned the first node the variable "current", then checks if it's equal to the data argument
      if (current.data === data) {
        return current;
      }
      checkNodes.push(...current.children);
    }
    return null;  //returns null if the node doesn't exist
  }
}

module.exports = { TreeNode, Tree };
