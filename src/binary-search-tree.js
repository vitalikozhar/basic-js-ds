const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode === null ? null : this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      let currentTemp = this.rootNode;

      while (true) {
        if (data === currentTemp.data) return;
        if (data < currentTemp.data) {
          if (currentTemp.left === null) {
            currentTemp.left = newNode;
            return;
          }
          currentTemp = currentTemp.left;
        } else if (data > currentTemp.data) {
          if (currentTemp.right === null) {
            currentTemp.right = newNode;
            return;
          }
          currentTemp = currentTemp.right;
        }
      }
    }
  }

  has(data) {
    if (this.rootNode === null) return false;
    let currentTemp = this.rootNode;

    while (currentTemp !== null) {
      if (data === currentTemp.data) return true;
      data < currentTemp.data
        ? (currentTemp = currentTemp.left)
        : (currentTemp = currentTemp.right);
    }
    return false;
  }

  find(data) {
    if (this.rootNode === null) return null;
    let currentTemp = this.rootNode;

    while (currentTemp !== null) {
      if (data === currentTemp.data) return currentTemp;
      data < currentTemp.data
        ? (currentTemp = currentTemp.left)
        : (currentTemp = currentTemp.right);
    }
    return null;
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      let minRight = this._findMin(node.right);
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
      return node;
    }
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (this.rootNode === null) return null;
  
    let currentTemp = this.rootNode;
    while (currentTemp.left !== null) {
      currentTemp = currentTemp.left;
    }
    return currentTemp.data;
  }
  
  max() {
    if (this.rootNode === null) return null;
  
    let currentTemp = this.rootNode;
    while (currentTemp.right !== null) {
      currentTemp = currentTemp.right;
    }
    return currentTemp.data;
  }
}

module.exports = {
  BinarySearchTree,
};
