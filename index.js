class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data, node = this.root) {
    if (node.data === data) return node;
    for (let i = 0; i < node.children.length; i++) {
      let found = this.findNode(data, node.children[i]);
      if (found) return found;
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
