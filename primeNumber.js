//finf all prime number smaller than n
function findPrime1(n){
  var result = [];
  for(let i = 2; i <= n; i++)
    if (isPrime(i)) result.push(i);
  return result;
}

const isPrime = num => {
  for(let i = 2; i <= Math.sqrt(num); i++)
    if(num % i === 0) return false;
  return num !== 1;
}

//using sieve of Eratosthenes
//sift out anything that's multiples of a prime number
function findPrime2(n){
	var arr = new Array(n+1);
	//each index stands for the actual number
	//since number 0 and 1 are not prime, mark them with 0 = not prime
	arr[0] = 0;
	arr[1] = 0;
	var result = [];
	for (let i = 2; i < n+1; i ++){
		if (arr[i] === undefined) {
			//if undefined, it is a prime, mark it with 1, push to the result
			arr[i] = 1;
			result.push(i) 
			//mark all multiples of i as 0
			for (let j = i*2; j < n+2; j += i){
				arr[j] = 0;
			}
		}  
	}	
	return result;
}

function compareArray(arr1, arr2){
	if(arr1.length == arr2.length){
		for (let i = 0; i < arr1.length; i ++){
			if (arr1[i] !== arr2[i]) return false
		}
		return true;
	} else {
		return false;
	}
}

let i = 10;
while (i < 1000001){
	console.log(`runtime for ${i}`);
	
	console.time('find prime way 1');
	var result1 = findPrime1(i);
	console.timeEnd('find prime way 1');

	console.time('find prime way 2');
	var result2 = findPrime2(i);
	console.timeEnd('find prime way 2');
	i *= 10;
}

/* results:
runtime for 10
find prime way 1: 0.189ms
find prime way 2: 0.147ms
runtime for 100
find prime way 1: 0.051ms
find prime way 2: 0.016ms
runtime for 1000
find prime way 1: 0.460ms
find prime way 2: 0.121ms
runtime for 10000
find prime way 1: 1.829ms
find prime way 2: 7.057ms
runtime for 100000
find prime way 1: 18.800ms
find prime way 2: 8.943ms
runtime for 1000000
find prime way 1: 437.117ms
find prime way 2: 109.285ms

*/