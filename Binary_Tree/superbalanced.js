//#8 
// Write a function to see if a binary tree ↴ is "superbalanced"
// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

//binary tree node class

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

//traverse the tree to find the min tree leave and max tree level
//the difference between min and max can't be more than 1
//use depth-first approach to get to leaves before breadth-first

function superBalance(tree) {
	if ((tree.left === null && tree.right === null)){
		return true;
	}
	
	var depths = [];

	var nodes = [];
	nodes.push([tree, 0]);

	while (nodes.length){
		console.log(nodes);
		var nodePair = nodes.pop();
		var node = nodePair[0];
		var depth = nodePair[1];

		// found a leaf
		if (!node.left && !node.right){
			//this depth doesn't exist yet, push depth to the array
			if (depths.indexOf(depth) <0 ){
				depths.push(depth);
				console.log(depths);

				if ( (depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) ){

					return false;
				}
			} 
		} else {
			//another node
			if (node.left) {
				nodes.push([node.left, depth + 1]);

				console.log("found left node");
				console.log(nodes);
			}

			if (node.right) {
				nodes.push([node.right, depth + 1]);
				console.log("found right node");
				console.log(nodes);
			}

		}
	}

	return true;


}

var rootTree = new BinaryTreeNode(30);

rootTree.insertRight(50);
// rootTree.right.insertRight(60);
// rootTree.right.right.insertRight(70);

rootTree.insertLeft(10);
rootTree.left.insertRight(15);
rootTree.left.right.insertRight(16)
console.log(rootTree);
console.log(superBalance(rootTree));

var rootTree2 = new BinaryTreeNode(70);
console.log(superBalance(rootTree2));