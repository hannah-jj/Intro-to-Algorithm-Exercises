//#13
//finding the index of rotating point of an array containing alphabetically sorted words
//rotating point is the starting of the alphabet



function binarySearch(arr, startP, endP) {
	startP = (startP == undefined) ? 0 : startP;
	endP = (endP == undefined) ? arr.length - 1 : endP;

	let midP = Math.floor((startP + endP)/2);

	// if midP reached the end or midP is the first position
	// that means index 0 is the rotating point
	if (midP == arr.length-1 || arr[midP] == arr[0]) {return 0;}

	// if midP is less than the previous position, found the point
	if (midP !== 0) {
		if (arr[midP] < arr[midP - 1]) return midP;
	}

	//if midP > letter at first position, means rotating point is second half
	//vice versa
	if (arr[midP] > arr[0]) {
		return binarySearch(arr, midP+1, endP);
	} else if (arr[midP] < arr[0]){
		return binarySearch(arr, startP, midP-1);
	}
}

  var words = [
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'xxx',
    'xxxx',
    'babka', //rotate here
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

  var words1 = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'babka', //rotate here
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
console.log(binarySearch(['abc']));
console.log(binarySearch(['abc','ccc']));
console.log(binarySearch(words));
console.log(binarySearch(words1));

