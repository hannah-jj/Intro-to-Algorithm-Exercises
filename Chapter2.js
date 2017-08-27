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