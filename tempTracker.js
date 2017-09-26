//#7
// write a TempTracker class that will track of temperatures inserted and
//min, max, mean, mode
//Optimize for space and time on getter Functions over insert() functions
//O(1) time and O(n) space

class TempTracker {
	constructor(){
		this.temps = {};
		this. min = null;
		this.max = null;
		this.runningSum = 0;
		this.count = 0;
		this.mean = 0;
		this.mode = null;
		this.maxOccurrences = 0;
	}

	insert(x) {

		if(this.temps.hasOwnProperty(x)){
			this.temps[x] = this.temps[x] + 1; 
		} else {
			this.temps[x] = 1;
		}

		this.min = this.min == null ? x : Math.min(this.min, x);
		this.max = this.max == null ? x : Math.max(this.max, x);
		this.count ++;
		this.runningSum += x;
		this.mean = this.runningSum/this.count;
		if (this.temps[x] > this.maxOccurrences){
			this.maxOccurrences = this.temps[x];
			this.mode = x;
		}
	}
}

var temp = new TempTracker();
temp.insert(20);
temp.insert(10);
temp.insert(10);
temp.insert(20);
console.log(temp.temps);
console.log(temp.min);
console.log(temp.max);
console.log(temp.mean);
console.log(temp.mode);