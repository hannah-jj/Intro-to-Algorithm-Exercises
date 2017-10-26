//#24
// reverse a singly linked list in place
//O(n) time & O(1) space

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function reverse(firstNode){
	currentNode = firstNode;
	previousNode = null;
	nextNode = null;

	while (currentNode) {
		nextNode = currentNode.next;
		currentNode.next = previousNode;

		previousNode = currentNode;
		currentNode = nextNode;
	}

	return previousNode;
}

var a = new LinkedListNode(5);
var b = new LinkedListNode(1);
var c = new LinkedListNode(9);

a.next = b;
b.next = c;

console.log(a);

reverse(a);
console.log(c);

var d = new LinkedListNode(9);
reverse(d);
console.log(d);