var log = function(a) {console.log(a)};

var example1_1 = {
	swap: function(a,b){
		var a1 = a;
		a = b;
		b = a1;
		return [a,b];
	}
}
// example1_1.swap(3,9);

var example1_2 = {
	swap: function(a,b){
		a = a + b;
		b = a-b;
		a = a-b;
		return [a,b];
	}
}
// example1_2.swap(3,9);

var example2 = {
	revertString: function(a){
		for (var i = a.length - 1; i >= 0; i--) {
			this.stringReverted += a[i];
		}
		return this.stringReverted;
	},
	stringReverted: ""
}
// example2.revertString("Cadena");

var person = (function test(){
	var person = "test";
	return {
		test: function(){
			return person;
		}
	}
})();

var createCalculator = function(){
	return {
		add: function(a,b){
			return a + b;
		},
		subtract: function(a,b){
			return a - b;
		},
		multiply: function(a,b){
			return a * b;
		},
		divide: function(a,b){
			return a / b;
		}
	}
};

var favoriteFoods = {
	getRandomFood: function(foods){
		return foods[Math.floor(Math.random() * foods.length)];
	}
};

var arrayOfNumbers = {
	print: function(numbers,onlyEvens){
		var text = [];
		numbers.forEach(function(number){
			if (onlyEvens) {
				if (number % 2 === 0) {
					text.push(number);
				}
			} else {
				text.push(number);
			}
		});
		return text;
	}
};

var halfOfArrayOfNumbers = {
	print: function(numbers, onlyEvens){
		return numbers.splice(0, numbers.length / 2);
	}
};

var numberOfWords = {
	of: function(text){
		return text.split(/(?=[A-Z])/g).length;
	}
};

var printWords = {
	of: function(text){
		return text.split(/(?=[A-Z])/g).join(" ");
	}
};

var isPalindrom = function(text) {
	var palindrom = true;
	for (var i = 0; i < text.length/2; i++) {
		if (text[i] !== text[text.length-i-1]) {
			palindrom = false;
			break;
		}
	}
	return palindrom;
}

// function resolve(i,ele,quantity) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       document.getElementsByClassName("pos"+i)[0].innerHTML = ele;
//     }, (1000*i)+quantity);
//   });
// }

var time = 700;

function swapElements(i) {
	setTimeout(() => {
		var ele1 = document.getElementsByClassName("pos" + i)[0];
		var ele2 = document.getElementsByClassName("pos" + (i + 1))[0];
		Object.entries(document.getElementsByClassName("pos"))
		.forEach((el)=>el[1].classList.remove("red","green"));
		ele1.classList.add("red");
		ele2.classList.add("green");
		ele1value = ele1.innerHTML;
		ele2value = ele2.innerHTML;
		if (ele1value > ele2value) {
			document.getElementsByClassName("pos" + i)[0].innerHTML = ele2value;
			document.getElementsByClassName("pos" + (i + 1))[0].innerHTML = ele1value;
		}
	}, time * i);
}

function nextIteration(quantity) {
	setTimeout(() => {
		order(quantity);
	}, time * quantity);
}

var order = function(quantity) {
	for (var i = 1; i <= quantity; i++) {
		if (i !== quantity) {
			swapElements(i);
		}
	}
	if (quantity > 1) {
		nextIteration(quantity-1);
	} else {
		document.getElementsByClassName("pos7")[0].innerHTML = "Done!";
	}
};



order(6);