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

  findNode(data, node = this.root) {
    console.log(node.data, data);
    if (!node) {
      return null;
    }
    if (node.data === data) {
      // console.log("Done!");
      return node;
    }
    let result = null;

    for (let i = 0; i < node.children.length; i++) {
      result = this.findNode(data, node.children[i]);

      if (result) {
        break;
      }
    }

    return result;
  }
}

module.exports = { TreeNode, Tree };
