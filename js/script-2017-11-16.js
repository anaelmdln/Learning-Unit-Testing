var log = console.log;

var map = function(numbers,func){
	var array = [];
	for(pos in numbers) {
		array.push(func(numbers[pos]));
	}
	return array;
}

var doubleUp = function(val){
	return val*2;
}

map([1,2,3,4], doubleUp);

// log([1,2,3,4].map((el)=>doubleUp(el)));

var reject = function(numbers,func){
	var array = [];
	for(pos in numbers) {
		if (!func(numbers[pos])) {
			array.push(numbers[pos]);
		}
	}
	return array;
}

var moreThanTwo = function(val){
	return val > 2;
}

var divisibleByTwo = function(val){
	return val % 2 === 0;
}

// log(reject([1,2,3,4], moreThanTwo));
// log(reject([2,3,4,5], divisibleByTwo));

// log([1,2,3,4].filter((el) => moreThanTwo(el)?el:null));

