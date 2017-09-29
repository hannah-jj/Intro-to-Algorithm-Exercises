//#14
// given a flightLength (in minutes) & an array of movies playtime
//find two movies' playtime sum up to flightLength
// using Set to access value with key easily
//run time O(n) space O(n)
var movieLengths = [45, 52,100, 200, 320, 53, 43, 50];
var flightLength = 520;

function findMovies(array, totalTime){
	var moivesSeen = new Set();
	var currentMovie =0;
	for (var i = 0; i < array.length; i ++){
	 	let diff = totalTime - array[i];
	 	if (moivesSeen.has(diff)){
	 		return true;
	 	}
	 	moivesSeen.add(array[i]);
	}
	return false;
}

console.log(findMovies(movieLengths, flightLength));