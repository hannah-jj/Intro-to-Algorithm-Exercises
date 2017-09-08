
//find the product of all numbers in the array except for the number at index
//use greedy approach
//O(n) time and O(n)O(n) space.
function getProductsOfAllIntsExceptAtIndex(intArray){
	var result = [];
	var tempProduct = 1;

	if (intArray.length < 2) {
		return 'array should contain more than 1 number';
	}

	for(i = 0; i < intArray.length; i ++) {
		result.push(tempProduct);
		tempProduct = intArray[i] * tempProduct;
	}

	tempProduct = 1;
	for(j = intArray.length-1; j >= 0; j --) {
		result[j] = tempProduct * result[j]; 
		tempProduct = intArray[j] * tempProduct;
	}

	return result;
}

var arr1 = [4];
console.log(getProductsOfAllIntsExceptAtIndex(arr1));

var arr1 = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(arr1));
// [84, 12, 28, 21]

var arr2 = [1, 2, 6, 5, 9];
console.log(getProductsOfAllIntsExceptAtIndex(arr2));
// [540, 270, 90, 108, 60]
