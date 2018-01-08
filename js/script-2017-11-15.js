// var log = function(a) {console.log(a)};

var instructorData = {
	name: "Elie",
	additionalData: {
		instructor: true,
		favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
		moreDetails: {
			favoriteBasketballTeam: "New York Knicks",
			numberOfSiblings: 3,
			isYoungest: true,
			hometown: {
				city: "West Orange",
				state: "NJ",
			},
			citiesLivedIn: ["Seattle", "Providence", "New York"]
		}
	}
};

var displayCities = function(){
	instructorData.additionalData
	.moreDetails.citiesLivedIn.forEach((city) => console.log(city));
}

var removeDetail = function(detail){
	delete instructorData.additionalData.moreDetails[detail];
}

var displayHometownData = function(){
	var data = instructorData.additionalData.moreDetails.hometown;
	console.log(data.city, data.state);
}

var addDetail = function(detail,value){
	instructorData.additionalData.moreDetails[detail] = value;
}

displayCities();

// "Seattle"
// "Providence"
// "New York"

displayHometownData();

// "West Orange"
// "NJ"

// addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
// addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/

// removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
// removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
// removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/

















var nestedData = {
	innerData: {
		order: ["first", "second", "third"],
		snacks: ["chips", "fruit", "crackers"],
		numberData: {
			primeNumbers: [2,3,5,7,11],
			fibonnaci: [1,1,2,3,5,8,13]
		},
		addSnack: function(snack){
			this.snacks.push(snack);
			return this;
		}
	}
}

console.info("Ejercicio 1");
for (var i = 0; i < nestedData.innerData.numberData.primeNumbers.length; i++) {
	console.log(nestedData.innerData.numberData.primeNumbers[i]);
}
console.info("Ejercicio 2");
for (var i = 0; i < nestedData.innerData.numberData.fibonnaci.length; i++) {
	console.log(nestedData.innerData.numberData.fibonnaci[i]);
}
console.info("Ejercicio 3");
console.log(nestedData.innerData.order[1]);
console.info("Ejercicio 4");
console.log(nestedData.innerData.addSnack("chocolate"));
console.info("Ejercicio 5");
console.log("this es el objecto en el que estamos actuando, innerData en este caso, que es un objeto interno de nestedData");

// Usando console.log  
// 1. Usando un bucle for, saca todos los numeros en el array printNumbers  
// 2. Usando un bucle for, saca todos los numeros en el array fibonnaci 
// 3. Saca el elemento en la clave 1 dentro del array "order"
// 4. Usa el método `addSnack` y añade "chocolate"
// 5. Qué es la palabra `this` que vemos en la función `addSnack`?


var nestedObject = {
	speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
	data: {
		continents: {
			europe: {
				countries: {
					switzerland: {
						capital: "Bern",
						population: 8000000
					}
				}
			}
		},
		languages: {
			spanish: {
				hello: "Hola"
			},
			french: {
				hello: "Bonjour"
			}
		}
	}
}

var addSpeaker = function(name) {
	nestedObject.speakers.push({"name": name});
}
var addLanguage = function(language, helloTranslated) {
	nestedObject.data.languages[language] = {"hello": helloTranslated};
}
var addCountry = function(country, capital, population) {
	nestedObject.data.continents.europe.countries[country] = {"capital": capital,"population": population};
}

// 1. Escribe una función `addSpeaker`para añadir un speaker al array. El speaker a añadir debe ser un objeto con al menos la clave 'nombre'
// 2. Escribe una función `addLanguage` que añada un lenguaje al objeto lenguajes. este objeto debe tener como clave el nombre del idioma, y al menos la clave "hello" dentro con la traducción como valor
// 3. Escribe una función `addCountry`que añnada un nuevo pais europeo. Este nuevo objeto debe ser similar al ya existente










console.log("Vocales en un array");
var arr = [];
Array.isArray(arr);
var nestedArr = ['Ellie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'],'Tom']],'Lorien'];
var allVowels = function(){
	var string = nestedArr.toString().toLowerCase();
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (["a","e","i","o","u"].indexOf(string[i]) !== -1) {
			count += 1;
		}
	}
	return count;
};
console.log(allVowels());


console.log("Vocales en un array 2");
var arr = [];
Array.isArray(arr);
var nestedArr = ['Ellie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'],'Tom']],'Lorien'];
var allVowels = function(){
	return nestedArr.toString().match(/[aeiou]/ig).length;
};
console.log(allVowels());


console.log("Numeros pares");
var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];
var printEvens = function(){
	var array = nestedArr.toString().split(',');
	for (var i = 0; i < array.length; i++) {
		if (array[i]%2 == 0) {
			console.log(array[i]);
		}
	}
};

printEvens();


console.log("Numeros pares");
var nestedArr = [[11,2,4],
/*             */[4,5,6],
/*             */[4,8,12]];
var print = function(){
	var length = nestedArr[0].length;
	var D1 = 0;
	var D2 = 0;
	for (var i = 0; i < length; i++) {
		D1 += nestedArr[i][i];
		D2 += nestedArr[length - i - 1][i];
	}
	return D1 - D2;
};

console.log(print());


console.log("Encontrar combinación para obtener el número divisible por 101.");
// var length = 5;
// var numbers = [55,3,45,33,25];
// var check = ["+","+","+","+","+"];
var length = 3;
var numbers = [22,79,21];
var check = ["+","+","+","+"];

var calc = function(a,b,pos) {
	if (check[pos] == "+") {
		return a+b;
	}
	if (check[pos] == "-") {
		return a-b;
	}
	if (check[pos] == "*") {
		return a*b;
	}
}

var changeCheck = function(check,pos) {
	if (check[pos] == "+") {
		check[pos] = "-";
		return check;
	}
	if (check[pos] == "-") {
		check[pos] = "*";
		return check;
	}
	if (check[pos] == "*") {
		check[pos] = "+";
		changeCheck(check,pos-1);
		return check;
	}
}
var stop = 0;

var find = function(){
	stop += 1;
	if (stop > 4000) {
		return false;
	}
	var start = 0;
	for (var i = 0; i < numbers.length; i++) {
		if (start == 0) {
			start = numbers[i];
			continue;
		}
		start = calc(start,numbers[i],i);
	}
	if (start % 101 == 0) {
		var text = "";
		for (var i = 0; i < numbers.length; i++) {
			if ( i == 0 ) {
				text += numbers[i];
			} else {
				text += check[i] + numbers[i];
			}
		}
		console.log('Eureka! tras ' + stop + " cálculos:", text + " es igual a " + start + " que es divisible por 101");
	} else {
		check = changeCheck(check,length - 1);
		find();
	}
};

find();
