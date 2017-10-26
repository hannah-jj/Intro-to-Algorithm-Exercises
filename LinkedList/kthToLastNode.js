// #25
// navigate to the kth node until last node on a linked list
// two approaches - both same space & time
// O(n) + O(m)

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

//#1 - walk through the list to find length
// walk through second time to find kth node
function kthToLastNode(k, node) {
	var len = 0;
	var current = node;
	while(current){
		len++;
		current = current.next;
	}

	if (k > len) {
		console.log("error - can't return when k is less or equal to length of list");
		return;
	}

	current = node;
	while(len - k > 0){
		len--;
		current = current.next
	}
	return current;

}

//#2 - walk through the list keeping two pointers nth nodes apart
function nthToLastNode(n, node){
	var rightPt = node;
	var leftPt = node;

	for(let i = 0; i < n; i++){
		if(rightPt){
			rightPt = rightPt.next;
		} else{
			console.log("error - can't return when k is less or equal to length of list");
			return;
		}
	}

	while(rightPt){
		leftPt = leftPt.next;
		rightPt = rightPt.next;
	}

	return leftPt;
}

//testing
var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
console.log(nthToLastNode(2, a));
