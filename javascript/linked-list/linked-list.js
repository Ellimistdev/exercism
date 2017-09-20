function LinkedList(){
  this._length = 0;
  this._head = null;
  this._tail = null;
  
}

LinkedList.prototype.pop = function(){
  var tail = this._tail.data;
  this.remove(this._length -1);
  return tail;
};

LinkedList.prototype.push = function(data){
  this.add(data);
};

LinkedList.prototype.shift = function(){
  var head = this._head.data;
  this.remove(0);
  return head;
};

LinkedList.prototype.unshift = function(data){
  this.add(data, 0);
};

LinkedList.prototype.count = function(){
  return this._length;
};

LinkedList.prototype.delete = function(data){
  var current = this._head, i = 0;
  
  while (current.data != data && i++ < this._length){
    current = current.next;
  }
  
  this.remove(i);
};

LinkedList.prototype.add = function(data, index){
  var node = {
    data: data,
    next: null,
    prev: null
    };

  if (this._length == 0){
    this._head = node;
    this._tail = node;
  } else if (index === 0){
    this._head.prev = node;
    node.next = this._head;
    this._head = node;
  } else {
    this._tail.next = node;
    node.prev = this._tail;
    this._tail = node;
  }
  
  this._length++;
};

LinkedList.prototype.remove = function(index){
  if (index > -1 && index < this._length){
    var current = this._head, i = 0;
    
    if (index === 0){
      //set new head
      this._head = current.next;
      // if empty
      if (!this._head){
        // kill the list
        this._tail = null;
      } else {
        // remove pointer to removed node
        this._head.prev = null;
      }
    } 
    else if (index === this._length -1){
      current = this._tail;
      // set tail to 2nd to last element
      this._tail = current.prev;
      // remove pointer to last element
      this._tail.next = null;
    } 
    else {
      while(i++ < index){
        current = current.next;
      }
      
      current.prev.next = current.next;
      //current.next.prev = current.prev ???
    }
    
    this._length--;
    
    return current.data;
   } else {
     return null;
   }
  

};
module.exports = LinkedList;