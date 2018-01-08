var assert = chai.assert;

describe("Tests 2017-11-14: ", function() {
	/*emaple1_1*/
	describe("Check emaple1_1 function: ", function() {
		it("Check", function() {
			result = example1_1.swap(3,9);
			assert.deepEqual(result, [9,3]);
		});
	});
	/*emaple1_2*/
	describe("Check emaple1_2 function: ", function() {
		it("Check", function() {
			result = example1_2.swap(3,9);
			assert.deepEqual(result, [9,3]);
		});
	});
	/*emaple2*/
	describe("Check emaple2 function: ", function() {
		it("Check", function() {
			result = example2.revertString("Cadena");
			assert.equal(result, "anedaC");
		});
	});
	/*person*/
	describe("Check person object: ", function() {
		it("Check", function() {
			result = person.test();
			assert.equal(result, "test");
		});
	});
	/*createCalculator*/
	describe("Check createCalculator function: ", function() {
		it("Check add", function() {
			calc = createCalculator();
			result = calc.add(20,20);
			assert.equal(result, 40);
		});
		it("Check subtract", function() {
			calc = createCalculator();
			result = calc.subtract(2,2);
			assert.equal(result, 0);
		});
		it("Check multiply", function() {
			calc = createCalculator();
			result = calc.multiply(2,2);
			assert.equal(result, 4);
		});
		it("Check divide", function() {
			calc = createCalculator();
			result = calc.divide(12,2);
			assert.equal(result, 6);
		});
	});
	/*favoriteFoods*/
	describe("Check favoriteFoods function: ", function() {
		it("Check if true", function() {
			data = ['Pizza', 'Carne', 'Pollo', 'Papas'];
			result = favoriteFoods.getRandomFood(data);
			assert.include(data, result);
		});
	});
	/*arrayOfNumbers*/
	describe("Check arrayOfNumbers function: ", function() {
		it("Check if true", function() {
			result = arrayOfNumbers.print([1,2,3,4,5,6,7,8,9,10], false);
			assert.deepEqual(result, [1,2,3,4,5,6,7,8,9,10]);
		});
		it("Check if false", function() {
			result = arrayOfNumbers.print([1,2,3,4,5,6,7,8,9,10], true);
			assert.deepEqual(result, [2,4,6,8,10]);
		});
		it("Check if nothing", function() {
			result = arrayOfNumbers.print([1,2,3,4,5,6,7,8,9,10]);
			assert.deepEqual(result, [1,2,3,4,5,6,7,8,9,10]);
		});
	});
	/*halfOfArrayOfNumbers*/
	describe("Check halfOfArrayOfNumbers function: ", function() {
		it("Check", function() {
			result = halfOfArrayOfNumbers.print([1,2,3,4,5,6,7,8,9,10]);
			/*deepEqual for array equality*/
			assert.deepEqual(result, [1,2,3,4,5]);
		});
	});
	/*numberOfWords*/
	describe("Check numberOfWords function: ", function() {
		it("Check", function() {
			result = numberOfWords.of("miTextoDeEjemplo");
			assert.equal(result, 4);
		});
	});
	/*printWords*/
	describe("Check printWords function: ", function() {
		it("Check", function() {
			result = printWords.of("miTextoDeEjemplo");
			assert.equal(result, "mi Texto De Ejemplo");
		});
	});
	/*isPalindrom*/
	describe("Check isPalindrom function: ", function() {
		it("Check when it's true", function() {
			result = isPalindrom("oso");
			assert.equal(result, true);
		});
		it("Check when it's false", function() {
			result = isPalindrom("osos");
			assert.equal(result, false);
		});
	});
});


describe("Tests 2017-11-15: ", function() {
	/*instructorData*/
	describe("Check instructorData function: ", function() {
		it("Check addDetail isHilarious", function() {
			addDetail("isHilarious", true);
			query = instructorData.additionalData.moreDetails;
			result = {
				favoriteBasketballTeam: "New York Knicks",
				numberOfSiblings: 3,
				isYoungest: true,
				hometown: {
					city: "West Orange",
					state: "NJ",
				},
				citiesLivedIn: ["Seattle", "Providence", "New York"],
				isHilarious: true
			};
			assert.deepEqual(query, result);
		});
		it("Check addDetail previousApartments", function() {
			addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
			query = instructorData.additionalData.moreDetails;
			result = {
				favoriteBasketballTeam: "New York Knicks",
				numberOfSiblings: 3,
				isYoungest: true,
				hometown: {
					city: "West Orange",
					state: "NJ",
				},
				citiesLivedIn: ["Seattle", "Providence", "New York"],
				isHilarious: true,
				previousApartments: ["Mission", "North Beach", "Nob Hill"]
			};
			assert.deepEqual(query, result);
		});
		it("Check removeDetail citiesLivedIn", function() {
			removeDetail('citiesLivedIn');
			query = instructorData.additionalData.moreDetails;
			result = {
				favoriteBasketballTeam: "New York Knicks",
				numberOfSiblings: 3,
				isYoungest: true,
				hometown: {
					city: "West Orange",
					state: "NJ",
				},
				isHilarious: true,
				previousApartments: ["Mission", "North Beach", "Nob Hill"]
			};
			assert.deepEqual(query, result);
		});
		it("Check removeDetail hometown", function() {
			removeDetail('hometown');
			query = instructorData.additionalData.moreDetails;
			result = {
				favoriteBasketballTeam: "New York Knicks",
				numberOfSiblings: 3,
				isYoungest: true,
				isHilarious: true,
				previousApartments: ["Mission", "North Beach", "Nob Hill"]
			};
			assert.deepEqual(query, result);
		});
		it("Check removeDetail favoriteBasketballTeam", function() {
			removeDetail('favoriteBasketballTeam');
			query = instructorData.additionalData.moreDetails;
			result = {
				numberOfSiblings: 3,
				isYoungest: true,
				isHilarious: true,
				previousApartments: ["Mission", "North Beach", "Nob Hill"]
			};
			assert.deepEqual(query, result);
		});
	});
	describe("Check nestedData function: ", function() {
		it("Check addSpeaker", function() {
			addSpeaker("Anael");
			result = nestedObject.speakers.map((el)=>(el.name)).includes("Anael");
			assert.equal(result, true);
		});
		it("Check addLanguage", function() {
			addLanguage("english", "hello");
			result = (nestedObject.data.languages.hasOwnProperty("english") && nestedObject.data.languages.english.hello == "hello");
			assert.equal(result, true);
		});
		it("Check addCountry", function() {
			addCountry("spain","Madrid",1000000);
			result = (nestedObject.data.continents.europe.countries.hasOwnProperty("spain") 
				&& nestedObject.data.continents.europe.countries.spain.capital == "Madrid" 
				&& nestedObject.data.continents.europe.countries.spain.population == 1000000);
			assert.equal(result, true);
		});
	});
});

describe("Tests 2017-11-16: ", function() {
	/*map*/
	describe("Check map function: ", function() {
		it("Check", function() {
			query = map([1,2,3,4], doubleUp);
			result = [2,4,6,8];
			assert.deepEqual(query, result);
		});
	});
	describe("Check reject function: ", function() {
		it("Check", function() {
			query = reject([1,2,3,4], moreThanTwo);
			result = [1,2];
			assert.deepEqual(query, result);
		});
		it("Check", function() {
			query = reject([2,3,4,5], divisibleByTwo);
			result = [3,5];
			assert.deepEqual(query, result);
		});
	});
});
