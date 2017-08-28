// Chapter 2 : Insertion Sort Page 18
var array = [12, 5, 2, -2, 4, 6, 0, -1, -1, 3];

//Insertion sort run time O(n^2)
//starting with the second element of the array
//compare the element with array's elements from beginning up to the comparing element
//insert the element in the correct place by
//shifting the elements as needed down the array
function insertionSort(array) {
	for (var j = 1; j < array.length; j++) {
		let key = array[j]
		let i = j - 1;

		//change the > key to < key to sort array in decreasing order
		while (i >= 0 && array[i] > key) {
			array[i + 1] = array[i]
			i --;
		}
		array[i + 1] = key;
	}
}

console.log(array);
insertionSort(array);
console.log(array);

//Chapter 2: Merge sort page 31 & 34
//Merge Sort run time O(n lg n)
//sort subarray in array from index p to r
function mergeSort(array, p, r){
	if (p < r) {
		var q = Math.floor((p+r)/2);
		mergeSort(array, p, q);
		mergeSort(array, q+1, r);
		merge(array, p, q, r);
	}
}

//p, q r are indices in the array such that p <= q < r
//array[p..q] & array[q+1..r] are sorted subarray
function merge(array, p, q, r){
	var left = array.slice(p, q+1);
	var right = array.slice(q+1, r+1);

	var sentinel = array[q] > array[r] ? array[q] + 1 : array[r] + 1;	
	
	left.push(sentinel);
	right.push(sentinel);
	
	var i = 0;
	var j = 0;
	for (var k = p; k <= r; k++){
		if (left[i] <= right[j]){
			array[k] = left[i];
			i++;
		} else {
			array[k] = right[j];
			j++;
		}
	}
	
}

var arrayMerge = [27, 26, 5, 45, 9, 11, 13, 3, 4, 16, 28, 10, 34];
mergeSort(arrayMerge, 0, arrayMerge.length-1);
console.log(arrayMerge);