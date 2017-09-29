function LinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.pop = function pop() {
  const tail = this.tail.data;
  this.remove(this.size - 1);
  return tail;
};

LinkedList.prototype.push = function push(data) {
  this.add(data);
};

LinkedList.prototype.shift = function shift() {
  const head = this.head.data;
  this.remove(0);
  return head;
};

LinkedList.prototype.unshift = function unshift(data) {
  this.add(data, 0);
};

LinkedList.prototype.count = function count() {
  return this.size;
};
// delete is reserved.
LinkedList.prototype.delete = function del(data) {
  let current = this.head;
  let i = 0;

  while (current.data !== data && i < this.size) {
    i += 1;
    current = current.next;
  }
  this.remove(i);
};

LinkedList.prototype.add = function add(data, index) {
  const node = { data };

  if (this.size === 0) {
    this.head = node;
    this.tail = node;
  } else if (index === 0) {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.size += 1;
};

LinkedList.prototype.remove = function remove(index) {
  if (index > -1 && index < this.size) {
    let current = this.head;
    let i = 0;

    if (index === 0) {
      // set new head
      this.head = current.next;
      // if empty
      if (!this.head) {
        // kill the list
        this.tail = null;
      } else {
        // remove pointer to removed node
        this.head.prev = null;
      }
    } else if (index === this.size - 1) {
      current = this.tail;
      // set tail to 2nd to last element
      this.tail = current.prev;
      // remove pointer to last element
      this.tail.next = null;
    } else {
      while (i < index) {
        i += 1;
        current = current.next;
      }
      current.prev.next = current.next;
      // current.next.prev = current.prev ???
    }
    this.size -= 1;
    return current.data;
  }
  return null;
};

module.exports = LinkedList;
