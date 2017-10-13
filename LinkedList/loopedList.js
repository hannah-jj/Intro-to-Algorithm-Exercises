//#23
//detect if a linked list has a cycle

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

function looped(firstNode) {
	var slowRunner = firstNode;
	var fastRunner = firstNode;
	while (fastRunner !== null && fastRunner.next){
		fastRunner = fastRunner.next.next;
		slowRunner = slowRunner.next;
		if (fastRunner === slowRunner){
			return true;
		}
	}
	return false;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('d');
var e = new LinkedListNode('e');
var f = new LinkedListNode('f');

a.next = b;
b.next = a;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = a;

console.log(looped(a));