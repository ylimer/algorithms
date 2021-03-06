
/* singly linked list class */
function SLL() {
  this.head = null;
  this.count = 0;
}

/* node class */
function Node(val) {
  this.val = val;
  this.next = null;
}

/* add a node to the end of the list */
SLL.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.count++;
    return;
  }

  var current = this.head;
  while (current.next) {
    current = current.next;
  } 

  current.next = new Node(val);
  this.count++;
  return;
}

/* traverse the list and print each element */
SLL.prototype.print = function() {
  if (!this.head) {
    return null;
  }

  var current = this.head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }

  console.log("count: ", this.count);

  return;
}

list = new SLL;
list.add(1);
list.add(2);
list.add(3);
list.print();

