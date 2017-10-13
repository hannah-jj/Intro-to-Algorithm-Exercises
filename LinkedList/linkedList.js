//#22
//delete a node in singly linked list
//O(1) time

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function deleteNode(node){
	var nextNode = node.next;

	if (node.next == null) {
		node = null;
		console.log("unable to delete last item");
	} else {
		node.value = nextNode.value;
		node.next = nextNode.next;		
	}
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

console.log(a);
deleteNode(c);
console.log(a);