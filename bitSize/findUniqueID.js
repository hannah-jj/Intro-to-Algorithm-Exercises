//given an array of interger numbers with one of the number being unique
//find the unique number
//utilize bitwise calculation XOR
// 1 ^ 1 = 0
// 0 ^ 0 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// O(n) time and O(1) space
function findUniqueID (arr){
	var result = 0;
	arr.forEach((num) => {
		result ^= num;
	})
	return result;
}

var ints = [35, 35, 36, 78, 91, 90, 91, 0, 90, 78, 36];
console.log(findUniqueID(ints));

//elaborate the answer to finding unique letter
function findUniqueChar (arr){
	var result = 0;
	arr.forEach((num) => {
		result ^= num.charCodeAt(0);
	})
	return String.fromCharCode(result);
}
var letters = ["b", "b", "c", "w", "k", "c", "w"];
console.log(findUniqueChar(letters));