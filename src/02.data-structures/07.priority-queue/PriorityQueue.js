import MinHeap from '../06.heap/MinHeap';


// It is same as min heap except that when comparing two elements
// we take into account its priority instead of the element's value.

class PriorityQueue extends MinHeap {
  constructor() {
    super();

    this.priorities = new Map();
  }


  /**
   * Add item to the priority queue.
   * @param {*} item - item we're going to add to the queue.
   * @param {number} [priority] - items priority.
   * @return {PriorityQueue}
   */
  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  /**
   * Remove item from priority queue.
   * @param {*} item - item we're going to remove.
   * @return {PriorityQueue}
   */
  remove(item) {
    super.remove(item);
    this.priorities.delete(item);
    return this;
  }


  /**
   * Change priority of the item in a queue.
   * @param {*} item - item we're going to re-prioritize.
   * @param {number} priority - new item's priority.
   * @return {PriorityQueue}
   */
  changePriority(item, priority) {
    this.remove(item);
    this.add(item, priority);
    return this;
  }


  /**
   * Find item by ite value.
   * @param {*} item
   * @return {Number[]}
   */
  findByValue(item) {
    return this.find(item);
  }

  /**
   * Check if item already exists in a queue.
   * @param {*} item
   * @return {boolean}
   */
  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  /**
   * Compares priorities of two items.
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }
    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  /**
   * Compares values of two items.
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}


export default PriorityQueue;
