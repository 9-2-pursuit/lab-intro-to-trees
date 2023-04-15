class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
    this.pointer = this.root;
  }

  findNode(data) {
    if (this.pointer.data === data) {
      const foundValue = this.pointer;
      this.pointer = this.root;

      return foundValue;
    }

    for (let child of this.pointer.children) {
      this.pointer = child;

      const value = this.findNode(data);

      if (value) {
        return value;
      }
    }

    return null;
  }
}

module.exports = { TreeNode, Tree };
