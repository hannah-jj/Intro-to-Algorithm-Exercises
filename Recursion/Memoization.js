// show nth fibonacci number
//lots of duplicated calculations
function nthFib (n) {
	if (n == 1 || n ==0){
		return n;
	} else {
		return (nthFib(n-2) + nthFib(n-1));
	}
}

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
fib.fibonacci(20);
console.log(fib.memo);