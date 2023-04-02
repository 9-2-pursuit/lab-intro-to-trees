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
  /*
          A
        ┌─┼─┐
        B C D──┐
      ┌─┼─┐    │
      E F G    H
    */
  findNode(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node.data === data) return node;
    for (let child of node.children) {
      const foundNode = this.searchNode(child, data);
      if (foundNode) return foundNode;
    }
    return null;
  }
}

module.exports = { TreeNode, Tree };
