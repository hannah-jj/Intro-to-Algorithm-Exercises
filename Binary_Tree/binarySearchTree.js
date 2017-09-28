//#9
// Write a function to check if a binary tree
// is a binary search tree
// The node's value is greater than all values in the left subtree.
// The node's value is less than all values in the right subtree.

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

var rootTree = new BinaryTreeNode(30);

rootTree.insertRight(50);
rootTree.right.insertRight(16);
rootTree.right.right.insertRight(70);

rootTree.insertLeft(10);
rootTree.left.insertRight(20);
rootTree.left.right.insertRight(21)

//recursion
function bssR(tree, lowerBound, upperBound) {
	// start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
	lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
	upperBound = (typeof upperBound !== 'undefined') ? upperBound : Infinity;
	
	//base case - node with no leaves
	if (!tree){
		return true;
	}

	if (tree.value <= lowerBound || tree.value >= upperBound){
		return false;
	} 

	return bssR(tree.left, lowerBound, tree.value) && bssR(tree.right, tree.value, upperBound);
}



//non-recursion
function isBinarySearchTree(treeRoot) {

    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var {node, lowerBound, upperBound} = nodeAndBounds

        // if this node is invalid, we return false right away
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
}

console.log(bssR(rootTree));
console.log(isBinarySearchTree(rootTree));