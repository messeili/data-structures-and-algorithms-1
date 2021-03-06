'use strict';
let Queue = require('../stacksAndQueues/stacks-and-queues').Queue;

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // ROOT - LEFT - RIGHT
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  //  LEFT- ROOT - RIGHT
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  // LEFT - RIGHT - ROOT
  postOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }

  breadthFirst(tree) {
    const results = [];
    let newQueue = new Queue();
    const _walk = (node) => {
      newQueue.enqueue(node);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);

      // while (node.right || node.left) {
      //   if (node.left) {
      //     newQueue.enqueue(node.left);
      //   } else if (node.right) {
      //     newQueue.enqueue(node.right);
      //   }
      //   node = node.left;
      // }
    };

    _walk(this.root);
    return results;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    const node = this.root;
    if (!node) {
      this.root = new Node(value);
      return this;
    }
    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = new Node(value);
          return this;
        } else if (node.left) {
          return searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = new Node(value);
          return this;
        } else if (node.right) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    searchTree(node);
  }

  findMaximumValue() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
//Test
// const bt = new BinarySearchTree();
// bt.add(6);
// bt.add(2);
// bt.add(4);
// bt.add(9);
// bt.add(15);
// bt.add(50);
// bt.add(53);
// bt.add(12);
// bt.add(22);
// bt.add(17);
// console.log(bt);
// bt.breadthFirst();
// bt.findMaximumValue();

// const one = new Node(2);
// const two = new Node(7);
// const three = new Node(5);
// const four = new Node(2);
// const five = new Node(6);
// const six = new Node(9);
// const seven = new Node(5);
// const eight = new Node(11);
// const nine = new Node(4);
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.right = six;
// five.left = seven;
// five.right = eight;
// six.left = nine;
// let tree = new BinaryTree(one);
// tree.breadthFirst(tree);


module.exports = { BinaryTree, BinarySearchTree, Node };
