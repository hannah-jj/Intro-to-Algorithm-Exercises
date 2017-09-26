//#6 
// Write a function to find the rectangular intersection of two given love rectangles.
// O(1) time and O(1) space

function findOverlap(x1, width1, x2, width2) {
	let startX = Math.max(x1, x2);
	let endX = Math.min(x1 + width1, x2 + width2);

	if (startX > endX) {
		return {startPoint: null, range: null};
	} else {
		return {startPoint: startX, range: endX-startX}
	}
}

function findRectangularOverlap(rectA, rectB) {
	let xOverLap = findOverlap(rectA.leftX, rectA.width, rectB.leftX, rectB.width);
	let yOverLap = findOverlap(rectA.bottomY, rectA.height, rectB.bottomY, rectB.height)
	return {
		leftX: xOverLap.startPoint,
		bottomY: yOverLap.startPoint,
		width: xOverLap.range,
		height: yOverLap.range
	};
}


var rect1 = {
	leftX: 1,
	bottomY: 5,
	width: 10,
	height: 4
};

var rect2 = {
	leftX: 2,
	bottomY: 6,
	width: 10,
	height: 4
};

var result = findRectangularOverlap(rect1, rect2);
console.log(result);