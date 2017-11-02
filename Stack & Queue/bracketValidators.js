// function that validates a string with correctly nested braces/brackets/parenthesis
//'(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."

//Time O(n)

function bracketValidators(str){
	var dict = {'(': ')', '[': ']', '{': '}'};
	var stack = [];

	for (var i = 0; i < str.length; i ++){
		if(str[i] === '(' || str[i] === '[' || str[i] === '{'){
			stack.push(str[i]);
		} else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
			if(stack.length === 0){
				return false;
			}
			var symbol = stack.pop();
			if (dict[symbol] !== str[i]){
				return false;
			}
		}
	}

	return stack.length === 0;
}

var str = "hellok{helo(cool)[][]{}()}";
console.log(bracketValidators(str));