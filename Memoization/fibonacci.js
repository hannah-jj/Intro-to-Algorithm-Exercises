// show nth fibonacci number
//lots of duplicated calculations
var nth = 10;

function nthFib (n) {
	if (n == 1 || n ==0){
		return n;
	} else {
		return (nthFib(n-2) + nthFib(n-1));
	}
}
console.log(nthFib(nth));

//Memoization
class Fib {
	constructor() {
		this.memo = {'0': 0, '1':1};
		this.result = 0;
	}

	fibonacci(n) {
		if (this.memo.hasOwnProperty(n)) {
			return this.memo[n];
		}

		var result = this.fibonacci(n-1) + this.fibonacci(n-2);

		this.memo[n] = result;
		return result;
	}
}

var fib = new Fib();
console.log(fib.fibonacci(nth));

//bottom up approach without recursion
//O(n) time and O(1) space
function fibNth(n){
	if (n == 0 || n == 1) return n;

	var prev2 = 0;
	var prev1 = 1;
	var sum = 0;
	var count = n;
	while (count > 1) {
		sum = prev1 + prev2;
		prev2 = prev1;
		prev1 = sum;
		count --;
	}
	return sum;
}

console.log(fibNth(nth));
