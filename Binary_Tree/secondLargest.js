// Write a function to find the 2nd largest element in a binary search tree.
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

//return the right most node with a right leave
function largest(tree){
	if (!tree){
		return false;
	}
	
	if (tree.right) {
		return largest(tree.right);
	}

	return tree.value
}

//if the right most mode's right child has no left subtree
//the right most node is the second largest
//otherwise the largest number in that left subtree is the second largest
function secondLargest(treeRoot){
	//at least two nodes (including parent node)
	if (!treeRoot || (!treeRoot.right && !treeRoot.left)) {
		return false;
	}

	//gase case 1
	//no right node, then the largest of leftnode is second largest
	if (!treeRoot.right && treeRoot.left){
		return largest(treeRoot.left);
	}

	//base case 2
	//has right node, this right node doesn't have a left subtree
	//then the current node which is the parent is the second largest
	if (treeRoot.right && !treeRoot.right.left && !treeRoot.right.right){
		return treeRoot.value;
	}

	//recursion
	return secondLargest(treeRoot.right);
}

var rootTree = new BinaryTreeNode(30);

rootTree.insertRight(50);
rootTree.right.insertRight(60);
// rootTree.right.right.insertRight(70);
// rootTree.right.right.right.insertLeft(65);

rootTree.insertLeft(10);
// rootTree.left.insertRight(20);
// rootTree.left.right.insertRight(21)

var result = secondLargest(rootTree);
console.log(result);