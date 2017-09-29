//#12
//search an integer in an array of n integers sorted in ascending order
//using binary search time O(lg n)

function findX(arr, x, startP, endP) {
	startP = (startP == undefined) ? 0 : startP;
	endP = (endP == undefined) ? arr.length - 1 : endP;

	if (startP == endP && arr[startP] != x) {
		return false;
	}
	if (startP == endP && arr[startP] == x) {
		return true;
	}

	let midP = Math.floor((startP + endP)/2);

	if (arr[midP] == x) {
		return true;
	} 

	if (arr[midP] < x) {
		return findX(arr, x, midP+1, endP);
	} else if (arr[midP] > x){
		return findX(arr, x, startP, midP-1);
	}
}

var array1 = [5];
console.log(findX(array1, 5));

var array = [1,3,5,9,24,63,69,75,76,78];
console.log(findX(array, 0));
console.log(findX(array, 100));
console.log(findX(array, 76));
console.log(findX(array, 1));
console.log(findX(array, 78));
