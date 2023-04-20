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

  findNode(data, node=this.root) {
    if (node.data === data) return node;
    for (let i = 0; i < node.children.length; i++) {
      if (this.findNode(data, node.children[i])) return this.findNode(data, node.children[i]);
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
``