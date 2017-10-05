//#20
//use Stack class defined below
//implement a maxStack class that can get access to the largest element in a stack
//solution - use another stack to store the max element as push & pop occurs in real time
function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {

    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

//solution begins here

function MaxStack(){
    this.items = new Stack();
    this.maxElement = new Stack();
}

//as new element got pushed in, update the maxElement stack with appropriate new Max
MaxStack.prototype.push = function (item) {
    this.items.push(item);
    if (!this.maxElement.peek() || item >=  this.maxElement.peek()){
        this.maxElement.push(item);
    }
}

//as element got popped, update the maxElement stack accordingly
MaxStack.prototype.pop = function() {
    var item = this.items.pop();
    if (item === this.maxElement.peek()){
        this.maxElement.pop();
    }
    return item;
}

MaxStack.prototype.getMax = function() {
    return this.maxElement.peek();
}

//testing
var testStack = new MaxStack();
console.log(testStack);
testStack.push(1);
testStack.push(5);
testStack.push(1);
testStack.push(7);
testStack.push(4);
testStack.push(10);
testStack.push(7);
console.log(testStack);
console.log(testStack.getMax());
console.log(testStack.pop());
console.log(testStack.getMax());
console.log(testStack);
console.log(testStack.pop());
console.log(testStack.getMax());
console.log(testStack);
