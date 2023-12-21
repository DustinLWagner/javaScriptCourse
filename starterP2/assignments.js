'use strict';
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} and it's capital city is ${capitalCity}.`

}
const unitedStates = describeCountry('United States', '332 Million people', 'Washington');
const angola = describeCountry('Angola', '32 Million people', 'Luanda');
const eritrea = describeCountry('Eritrea', '3.5 Million people', 'Asmara');


console.log(unitedStates);
console.log(angola);
console.log(eritrea);

// Function Declaration
const worldPop = (7900);
const usaPop = (332);
const angoPop = (32);
const eritPop = (3.5);
const chinaPop = (1441);


function percentageOfWorld1(population) {
    return (population / worldPop) * 100;
}
const chinaPercent = percentageOfWorld1(chinaPop);
const usPercent = percentageOfWorld1(usaPop);
const angoPercent = percentageOfWorld1(angoPop);
console.log(angoPercent, chinaPercent, usPercent);


//Function Expression
const percentageOfWorld2 = function (population) {
    return (population / worldPop) * 100;
}
const perPop2 = percentageOfWorld2(usaPop);
const perPop3 = percentageOfWorld2(chinaPop);
const perPop4 = percentageOfWorld2(angoPop);

console.log(perPop2, perPop3, perPop4);

// Arrow Function
const percentageOfWorld3 = population => (population / worldPop) * 100;
const percUsPop = (percentageOfWorld3(usaPop));
const percAngoPop = (percentageOfWorld3(angoPop));
const percEritPop = (percentageOfWorld3(eritPop));
console.log(percAngoPop, percEritPop, percUsPop);

// Functions calling other Functions //

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    return console.log(description);
}
describePopulation('United States', `${usaPop}`);
describePopulation('Angola', `${angoPop}`);
describePopulation('China', `${chinaPop}`);
describePopulation('Butthole', 7900);



////////////////
/////////////   CHALLENGE #1
///////////////


// create calculate function
const calcAverage = (a, b, c) => (a + b + c) / 3;
//creating values with calcAvg function to be used in checkWinner
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

//create checkWinner function
function checkWinner(avgDolphins, avgKoalas) {
    {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

        } else if (avgKoalas >= 2 * avgDolphins) {

            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

        } else
            console.log(`No team wins`);
    }
}
//calling the function using values from calcAvg score func
checkWinner(scoreDolphins, scoreKoalas);

//Updating the scores
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
//calling function with updated scores
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////////////////////////



//ARRAAYYSSS INTRO //////////

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const worldPop = (7900);
const usaPop = (332);
const angoPop = (32);
const eritPop = (3.5);
const chinaPop = (1441);

function percentageOfWorld1(population) {
    return (population / worldPop) * 100;
}

const populations = [usaPop, angoPop, eritPop, chinaPop];
const popLength = populations.length;
console.log(popLength === 4);

const percentages = [(percentageOfWorld1(usaPop)), percentageOfWorld1(angoPop), percentageOfWorld1(eritPop), percentageOfWorld1(chinaPop)];
console.log(percentages);
console.log(usaPop, 'and ', percentages[0]);



///////////////////////////////////////////////////////////



// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'

const neighbors = ['Canada', 'Mexico', 'Water'];

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array

neighbors.push('Utopia');
console.log(neighbors);

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array

neighbors.pop(); //Removes last element

// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'

if (neighbors.includes('Germany')) {
    console.log('Probably a central European country :D');
} else (
    console.log('Probably not a central European country :D')
);

// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

console.log(neighbors.indexOf('Water'));
neighbors[2] = 'Ocean';
//let index = neighbors.indexOf('Water');
// if (index !== -1) {
//     neighbors['Water'] = 'Ocean';
// }
console.log(neighbors);

 */

// Intro to Objects

const myCountry = {
    country: 'USA',
    capital: 'Washington, D.C.',
    language: 'English',
    population: 334.9,
    neighbours: ['Canada', 'Mexico']
};

//////// Dot vs Bracket Notaion //////////////
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.

// const describeCountry = (`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// console.log(describeCountry);

// console.log(`${myCountry.country} has ${myCountry.population = (myCountry.population + 2)} million ${myCountry.language} - speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// console.log(`${myCountry.country} has ${myCountry['population'] - 2} million ${myCountry.language} - speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

///////correction///////

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`)

myCountry.population += 2;  // adding to population w/ dot notation
console.log(myCountry.population);

myCountry['population'] -= 2; //subtract from population w/ bracket notation
console.log(myCountry.population);