//Write a function that, given a sentence
//along with the position of an opening parenthesis
//finds the position of the corresponding closing parenthesis.

//time O(n), space O(1)
function paren(str, pos){
	var result = pos+1;
	var parenCount = 0;

	while(result < str.length){
		if(str[result]==="("){
			result++;
			parenCount += 1;
		} else if(str[result] === ")" && parenCount === 0){
			return result;
		} else if(str[result] === ")" && parenCount > 0){
			result++;
			parenCount -= 1;
		} else {
			result++;
		}
	}
}

var text = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
console.log(paren(text, 10));