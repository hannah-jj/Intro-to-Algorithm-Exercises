//#1
//find the max profit given an array containing stock price from the day before
//can't do short sell or buy & sell at the same time
//O(n) time and O(1)O(1) space
function getMaxProfit(stockArray) {
	var minPrice = stockArray[0];
	var maxProfit = stockArray[1] - stockArray[0];

	for (var i = 1; i < stockArray.length; i ++) {
		var currentPrice = stockArray[i];
		var currentProfit = currentPrice - minPrice;

		maxProfit = Math.max(maxProfit, currentProfit);
		minPrice = Math.min(minPrice, currentPrice);
	}

	return maxProfit
}

var stock = [10, 7, 5, 8, 11, 9];
console.log(getMaxProfit(stock));
// => 6

var stock1 = [15, 14, 13, 12, 9, 10];
console.log(getMaxProfit(stock1));
// => 1

//#2
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

//#3
//find the maxProduct from 3 numbers in a given array
// O(n) time and O(1) additional space.
function findMaxProduct(intArray){
	var highest = Math.max(intArray[0], intArray[1]);
    var lowest  = Math.min(intArray[0], intArray[1]);

    var highest2 = intArray[0] * intArray[1];
    var lowest2 = intArray[0] * intArray[1];

	var maxProduct = intArray[0] * intArray[1] *intArray[2];

	for (var i = 2; i < intArray.length; i++){
		var current = intArray[i];

		maxProduct = Math.max(maxProduct, current * highest2, current * lowest2);
		highest2 = Math.max(highest2, current * highest, current * lowest2);
		lowest2 = Math.min(lowest2, current * highest, current * lowest);

		highest = Math.max(highest, current);
		lowest = Math.min(lowest, current);
	}

	return maxProduct;
}

var arr3 = [-10, -10, 1, 3, 2];
console.log(findMaxProduct(arr3));
//300

var arr4 = [1, 10, -5, 1, -100];
console.log(findMaxProduct(arr4));
//5000

