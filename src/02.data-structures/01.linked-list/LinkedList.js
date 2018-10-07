/* *******************
_      _       _            _   _      _     _
| |    (_)     | |          | | | |    (_)   | |
| |     _ _ __ | | _____  __| | | |     _ ___| |_
| |    | | '_ \| |/ / _ \/ _` | | |    | / __| __|
| |____| | | | |   <  __/ (_| | | |____| \__ \ |_
|______|_|_| |_|_|\_\___|\__,_| |______|_|___/\__|

Big O Notation = O (n)

********************* */

import LinkedListNode from './LinkedListNode';

/*
 * @export
 * @class LinkedList
 */
export default class LinkedList {
  constructor() {
    /* @var LinkedListNode */
    this.head = null;

    /* @var LinkedListNode */
    this.tail = null;
  }

  /*
   * @param {any} value
   * @return {LinkedList}
   * @memberof LinkedList
   */
  prepend(value) {
    // Make new node to be a head.
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /*
   * @param {any} value
   * @return {LinkedList}
   * @memberof LinkedList
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /*
   * @param {any} value
   * @returns {LinkedListNode}
   * @memberof LinkedList
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;


    // If the head must be deleted then make 2nd node to be a head.
    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // If next node must be deleted then make next node to be a next next one.
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.tail.value === value) {
      deletedNode = null;
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /*
   * @param {any} value
   * @param {function} callback
   * @returns {LinkedListNode}
   * @memberof LinkedList
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value..
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /*
   * @returns {LinkedListNode}
   * @memberof LinkedList
   */
  deleteTail() {
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    const deletedTail = this.tail;

    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  /*
   * @returns {LinkedListNode}
   * @memberof LinkedList
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /*
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  /*
   * @return {LinkedListNode[]}
   */
  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /*
   * @return {string}
   * @memberof LinkedList
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  /*
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // Store next node.
      nextNode = currNode.next;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
