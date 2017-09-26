//write a function that finds the ascii distance between two string
//ascii code for all characters are located - http://ee.hawaii.edu/~tep/EE160/Book/chap4/subsection2.1.1.1.html

//example 1: input kitten & ittenk
//output 214 because removing k from kitten and k from ittenk is the shortest way to make the two strings the same
//k's ascii code is 107

//example 2: input at & t
//output 97 because removing "a" will make the two strings same

//example 3: input Saturday & Sunday
//output 437 remove "atr" from str1 remove "n" from str2

//you can utlize the LevenshteinDistance algorithm found on wikipedia
//https://en.wikipedia.org/wiki/Levenshtein_distance


function ascii_distance(str1, str2){
	var cost;
	if (str1.length == 0) {
		return calc_dist(str2);
	} else if (str2.length == 0) {
		return calc_dist(str1);
	}

	if ( str1.charAt(str1.length-1) == str2.charAt(str2.length-1)) {
		cost = 0;
	} else {
		cost = str1.charCodeAt(str1.length-1) + str1.charCodeAt(str1.length-1);
	}

	return Math.min(ascii_distance(str1.slice(0,str1.length-1), str2) + str1.charCodeAt(str1.length-1),
		ascii_distance(str1, str2.slice(0, str2.length-1)) + str2.charCodeAt(str2.length-1),
		ascii_distance(str1.slice(0, str1.length-1), str2.slice(0, str2.length-1)) + cost);
}

function calc_dist(str){
	var result = 0;
	for (var i = 0; i < str.length; i ++) {
		let code = str.charCodeAt(i);
		result = result + code;
	}
	return result;
}

//example 2
var w1 = "kitten";
var w2 = "ittenk";

console.log(ascii_distance(w1, w2)); 
// removing k from kitten and k from ittenk will make the two same
//107+107 = 214

//example 2
var w3 = "at";
var w4 = "t";
console.log(ascii_distance(w3, w4)); 
// removing a will make the two same the result is 97

//example 3
var w5 = "Saturday";
var w6 = "Sunday";
console.log(ascii_distance(w5, w6)); // 

console.log(calc_dist("atrn")); // manual answer for example 3 above. the result is same

//ascii code - http://ee.hawaii.edu/~tep/EE160/Book/chap4/subsection2.1.1.1.html