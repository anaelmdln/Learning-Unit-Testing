/* Ejercicio 1 */

/*
console.info("\nEjercicio 1");

var num = 0;

while(num < 1 || num > 99) {
	num = parseInt(prompt("Dame un número entre 1 y 99"));
	if (isNaN(num))
		num = 0;
}

if (num <= 49) {
	console.log("Menor", num);
} else {
	console.log("Mayor", num);
}


/* Ejercicio 1 variante */

/*
console.info("\nEjercicio 1 variante");

var num = 0;

var pedirNumero = function() {
	num = parseInt(prompt("Dame un número entre 1 y 99"));
	if (isNaN(num))
		num = 0;
	if (num < 1 || num > 99) {
		pedirNumero();
	}
};

pedirNumero();

if (num <= 49) {
	console.log("Menor", num);
} else {
	console.log("Mayor", num);
}


/* Ejercicio 2 */

/*
console.info("\nEjercicio 2");

var num = 0;

while(num < 1 || num > 6) {
	num = parseInt(prompt("Dame un número entre 1 y 6"));
	if (isNaN(num))
		num = 0;
}

if (num <= 4) {
	console.log("Otra vez será", num);
} else if (num === 5) {
	console.log("Uy!!", num);
} else {
	console.log("Correcto!!", num);
}


/* Ejercicio 3 */

/*
console.info("\nEjercicio 3");

var array = [1,2,3];

array[3] = prompt("Dime algo");
array[array.length] = prompt("Dime algo");
array.push(prompt("Dime algo"));

console.log(array.length, array);


/* Ejercicio 4 */

/*
console.info("\nEjercicio 4");

var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

console.log("La letra es: " + letras[prompt("Dame los números de tu dni")%23]);


/* Ejercicio 5 */
/*

console.info("\nEjercicio 5");

var foods = ["Carne", "Pollo", "Papas"];

console.log(foods[1]);

foods[foods.length - 1] = "sancocho canario";

var primera = foods.shift(0,1);

foods.push("Más papas");
foods.unshift("Pizza");

console.log(foods);


/* Ejercicio 6 */
// [2,3,4,5] -> [2,4,5]
// ["alpha","gamma","delta"] -> ["alpha","beta","gamma","delta"]
// [10,-10,-5,-3,-2,1] -> [10,9,8,7,6,5,4,3,2,1]

/*
console.info("\nEjercicio 6");

var array1 = [2,3,4,5];
array1.splice(1,1);
console.log(array1);

var array2 = ["alpha","gamma","delta"];
array2.splice(1,0,"betta");
console.log(array2);

var array3 = [10,-10,-5,-3,-2,1];
var mayor = Math.abs(array3[0]);
var menor = mayor;
array3.forEach(function(number){
	number = Math.abs(number);
	if (number > mayor) mayor = number;
	if (number < menor) menor = number;
});
var array4 = [];
for (var i = mayor; i >= menor; i--) {
	array4.push(i);
}
console.log(array4);


/* Ejercicio 7 */

/*
console.info("\nEjercicio 7");

var sitios = [];
for (var i = 0; i < 5; i++) {
	sitios.push(prompt("¿Donde quieres viajar? " + (i + 1)));
}

console.log(sitios);


/* Ejercicio 8 */

/*
console.info("\nEjercicio 8");

var num = 0;
var numbers = [];
while(num < 100) {
	num = parseInt(prompt("Dame un número"));
	numbers.push(num);
	if (isNaN(num))
		num = 0;
}


console.log(numbers);


/* Ejercicio Random Arrow function */

/*
console.info("\nEjercicio Random Arrow function");

var test = [1,2,3,4];

test.forEach(ele => console.log(ele));


/* Ejercicio 9 */

/*
console.info("\nEjercicio 9");
var number = 0;
while(number < 20) {
	num = parseInt(prompt("Dame un número"));
	if (isNaN(num)) num = 0;
	if (num % 2 == 0) number += num;
}
console.log(number);


/* Ejercicio 10 */

/*
console.info("\nEjercicio 10");
// join concat
var text;
for (var i = 1; i < 101; i++) {
	text = "";
	if (i % 3 === 0) text += "Fizz";
	if (i % 5 === 0) text += "Buzz";
	if (i % 3 !== 0 && i % 5 !== 0) text += i;
	console.log("\n" + text);
}


// Mi forma de hacerlo
var isPangram = function(string) {
	var array = [];
	string = string.toLowerCase();
	for (var i = 0; i < string.length; i++) {
		if (array.indexOf(string[i]) === -1 && string[i] !== ' ') {
			array.push(string[i]);
		}
	}
	if (array.length == 26) return "It's a pangram";
	if (array.length !== 26) return "It's not a pangram";
};

var string = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(string));

// Forma cool de internet
function isPangram2(string) {
	// ?! excluir
	// .* todos los elementos
	// \1 en referencia al grupo 1 (a-z)
	var regex = /([a-z])(?!.*\1)/g;
	return (string.match(regex) || []).length === 26;
}
console.log(isPangram2("The quick brown fox jumps over the lazy dog"));


/* Ejercicio 11 */

/*
console.info("\nEjercicio 11");
var num = parseInt(prompt("Dime un número"));

for (var i = 0; i <= num; i++) {
	var text = "";
	for (var j = 0; j <= i; j++) {
		text += "#";
	}
	console.log(text);
}


/* Ejercicio 12 */

/*
console.info("\nEjercicio 12");
var velas = [1, 3, 5, 7, 7, 3, 5];
var cuantasPodemosSoplar = function(velas){
	var mayor = 0;
	velas.forEach(vela => (vela > mayor)? mayor = vela:"");
	var longitud = velas.filter(vela => vela === mayor).length;
	return "Hay " + longitud + " de velas " + mayor + " de alto.";
}

console.log(cuantasPodemosSoplar(velas));


/* Ejercicio 14 */

/*
console.info("\nEjercicio 14");
var birds = [1, 2, 3, 5, 5, 4, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4, 4, 4, 3, 4, 3, 5, 5, 2, 1];
var quantityOfBirds = function(birds){
	var total = [0,0,0,0,0];
	var groupQuantity = 0;
	var bestGroup;
	birds.forEach(bird => total[bird-1] += 1);
	for (var i = total.length; i >= 0; i--) {
		if (groupQuantity <= total[i]) {
			bestGroup = i;
			groupQuantity = total[i];
		}
	}
	// var longitud = velas.filter(vela => vela === mayor).length;
	return "Hay un total de " + total[bestGroup] + " en el grupo " + (bestGroup + 1);
}

console.log(quantityOfBirds(birds));


/* Ejercicio 13 */

/*
console.info("\nEjercicio 13");
var numbers = [4,6,5,3,3,1];
var numbers = [1,2,2,3,1,2];
var calculate = function(numbers){
	var max = 0;
	var selected = 0;
	for (var i = 0; i < numbers.length; i++) {
		var cxurrent = numbers[i];
		var currentMax = 0;
		numbers.forEach(function(number){
			if (Math.abs(current - number) <= 1 
				&& number >= current 
				&& number <= current+1) {
				currentMax += 1;
			}
		});
		if (max < currentMax) {
			max = currentMax;
			selected = numbers[i];
		}
	}
	return max + " números usando el " + selected;
}

console.log(calculate(numbers));



/* Ejercicio 14 */

/*
console.info("\nEjercicio 14");
var number = 101452;
number += "";
var text = "Es divisible por: ";
var textNo = "No es divisible por: ";
for (var i = 0; i < number.length; i++) {
	(number % number[i] == 0)
		? text += number[i] + " "
		: textNo += number[i] + " ";
}
console.log(text,textNo);



/* Ejercicio 15 */

/*
console.info("\nEjercicio 15");
var cantidadReclusos = 15;
var comienzo = 5;
var cantidadRaciones = 7;
var reclusos = [];
for (var i = comienzo; i <= cantidadReclusos; i++) {
	reclusos.push(i);
}
for (var i = 1; i < comienzo; i++) {
	reclusos.push(i);
}
console.log(reclusos, "El recluso: " + reclusos[cantidadRaciones-1]);



/* Ejercicio 16 */

/*
console.info("\nEjercicio 16");
var text = "imanol";
var final = "";
var number = 4;
var array = text.split("");
array.forEach(letter =>	
	final += String.fromCharCode(letter.charCodeAt() + number)
	);
console.log(final);



/* Ejercicio 17 */

/*
console.info("\nEjercicio 17");
var text = "oso";
var palindromo = true;
var esPalindromo = function(text) {
	for (var i = 0; i < text.length/2; i++) {
		if (text[i] !== text[text.length-i-1]) {
			palindromo = false;
			break;
		}
	}
	return palindromo;
}
if (esPalindromo(text)) {
	console.log("Es palindromo");
} else {
	console.log("No es palindromo");
}

/* */