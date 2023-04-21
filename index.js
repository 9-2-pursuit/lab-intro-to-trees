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
    const loopSearch = (node) => {
      if (node.data === data) {
        return node;
      } else {
        for (let child of node.children) {
          const found = loopSearch(child);
          if (found) {
            return found;
          }
        }
        return null;
      }
    };

    return loopSearch(this.root);
  }
}

module.exports = { TreeNode, Tree };
