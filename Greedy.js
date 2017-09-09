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

//#4
//merge meeting time
// each time block means 30 min block since 9am
//should be generalizd to work in all format
//O(n^2)
function mergeTime(timeArray) {
	//find if a time is merged
	var result = [timeArray[0]];
	for (var i = 1; i < timeArray.length; i ++){
		var merged = false;
		for (var j = 0; j < result.length; j ++){
			var tempTime = overlap(result[j], timeArray[i]);
			if (tempTime !== false) {
				result[j] = tempTime;
				merged = true;
				break;
			}
		}
		if (!merged) { result.push(timeArray[i]); }
	}
	return result;
}

function overlap(time1, time2){
	if ((time2.startTime <= time1.endTime) && (time2.endTime >= time1.startTime)) {
		return {startTime: Math.min(time1.startTime, time2.startTime), endTime: Math.max(time1.endTime, time2.endTime)};
	} else {
		return false;
	}
}

var time =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

console.log(mergeTime(time));
// [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

var time1 =   [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];

console.log(mergeTime(time1));
//[{startTime: 1, endTime: 10}]

//same problem O(nlgn) time and O(n) space.
function mergeRanges(meetings) {

    // create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    var meetingsCopy = JSON.parse(JSON.stringify(meetings));
    // sort by start time
    var sortedMeetings = meetingsCopy.slice().sort(function(a, b) {
        return a.startTime > b.startTime ? 1 : -1;
    });

    // initialize mergedMeetings with the earliest meeting
    var mergedMeetings = [sortedMeetings[0]];

    for (var i = 1; i < sortedMeetings.length; i++) {

        var currentMeeting    = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // if the current and last meetings overlap, use the latest end time
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

        // add the current meeting since it doesn't overlap
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
}
console.log(mergeRanges(time));
console.log(mergeRanges(time1));
