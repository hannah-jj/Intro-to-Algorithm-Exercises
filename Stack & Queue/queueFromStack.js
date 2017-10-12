//implement queue with two stacks
//should have enqueue and dequeue methods

function Queue() {
	this.onStack = []; //for enqueue purpose
	this.offStack = []; //for dequeue purpose
}

Queue.prototype.enqueue = function(item) {
	this.onStack.push(item);
}

Queue.prototype.dequeue = function() {
	if (this.offStack.length === 0) {
		while(this.onStack.length > 0){
			this.offStack.push(this.onStack.pop());
		} //pop all items from onStack to offStack
	}
	return this.offStack.pop();
}

var queue = new Queue();
queue.enqueue('hello');
queue.enqueue('hello1');
queue.enqueue('hello2');
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
