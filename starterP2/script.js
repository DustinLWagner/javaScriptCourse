//  Strict Mode //
'use strict';
// and thats it, activates for entire sciprt. Must be first.
// strict mode forbids certain things and creates visual errors in certain situations
/*

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio'; Reserved word throws error
// const private = 5345;


function logger() {
    console.log('My Name is Dustin');
}

// calling / running / invoking Function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



// Function declaration (Can call a Function Declaration before you define it, even though its not a good idea but can be done if necessary)


function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);


// Funtion expression (can NOT Call Function Expression before it is defined)

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


*/


// Arrow Function
// const calc3 = birthYear => 2037 - birthYear;
// const age3 = calc3(1991);
// console.log(age3);



/*
const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retire = 65 - age;
    // return retire;
    return `${firstName} retires in ${retire} years.`;
}

console.log(yearsUntilRetire(1991, 'Dustin'));
console.log(yearsUntilRetire(1980, 'Bob'));


function cutPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetire = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retire = 65 - age;

    if (retire > 0) {
        console.log(`${firstName} retires in ${retire} years. `);
        return retire;
    } else {
        console.log(`${firstName} has already retired! `)
        return -1;

    }
}
console.log(yearsUntilRetire(1991, "Dustin"));
console.log(yearsUntilRetire(1980, "Mike"));


/////////  ARRAYS /////////

const friends = ['Michael', 'Steven', 'Peter']; //Literal Syntax

console.log(friends);

const y = new Array(1999, 1984, 2008, 2020);

console.log(friends[0]); //Michael
console.log(friends[2]);//Peter

console.log(friends.length); //get how many items in array
console.log(friends[friends.length - 1]); // get last in array
friends[2] = 'Jay';
console.log(friends);


const firstName = 'Dustin';
const dustin = [firstName, 'Wagner', 2024 - 1986, 'Coder', friends];

console.log(dustin);

// exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


//////// Basic Array Operations (Methods) //////////////

//Add Elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');  //Adds to end of Array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds to begining of Array
console.log(friends);

// Remove Elements
friends.pop();
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}


///////////////////////////////////////////////////////////////
//      CODING CHALLENGE #2
//////////////////////////////////////////////////////////////


// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         let tip = (bill * .15);
//         return tip;

//     } else {
//         let tip = (bill * .2);
//         return tip;
//     }
// }

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// calcTip(100);

const bills = [125, 555, 44];

const tips = [(calcTip(bills[0])), (calcTip(bills[1])), (calcTip(bills[2]))];

const totals = [((bills[0]) + (tips[0])), ((bills[1]) + (tips[1])), ((bills[2]) + (tips[2]))];

console.log(bills);

console.log(tips);

console.log(totals);




/////// Intro to Objects ////////////////
// Arrays for structured / Ordered Data
// Objects for unstructed Data

const dustin = {
    firstName: 'Dustin',
    lastName: 'Wagner',
    age: 2023 - 1986,
    job: 'mechanic',
    friends: ['Josh', 'Chris', 'Justin']
};
console.log(dustin);

//////// Dot vs. Bracket Notation//////////

console.log(dustin.lastName);
console.log(dustin['lastName']);

const nameKey = 'Name';
console.log(dustin['first' + nameKey]); // able to place expressions
console.log(dustin['last' + nameKey]); // inside brackets

// console.log(dustin.'last' + nameKey); Does Not Work

// const interestedIn = prompt('What do you want to know about Dustin? Choose between firstName, lastName, age, job, and friends.');
// // console.log(dustin.interestedIn); does not work, needs brackets
// if (dustin[interestedIn]) {
//     console.log(dustin[interestedIn]);
// } else {
//     console.log('Wrong request Choose between firstName, lastName, age, job, and friends.')
// }

dustin.location = 'USA';
dustin['twitter'] = '@twitterHandle';
// console.log(dustin);

// Challenge
// $dustin has $3 friends, and his best friend is $Josh

console.log(dustin.firstName, 'has', dustin.friends.length, 'friends,', 'and his best friend is', dustin.friends[0], '.');

// Dynamically written, Better I believe, with punctuation for sure.
console.log(`${dustin.firstName} has ${dustin.friends.length} friends, and his best friend is ${dustin.friends[0]}.`);



// Object methods Lecture not working 12-22-24,
// following along with Objects and Keyword This tutorial
// >> https://youtu.be/qs3F-z6ridc?si=s1jtdW5xCwSxEJqc >>

//Object, like user profile
const user1 = {
    name: 'Edwin', //string
    class: 'Rogue',
    age: 24,       // number
    level: 15,
    isHalfling: true, // boolean
    skills: ['Acrobatics', 'Cantrips', 'Deception'], // array
    // functions attatched to an Object are Methods

    sayName: function () {
        console.log(this.name); // THIS here is assigned when invoking the function, USER in this case, so THIS is assigned from USER
    },

    sayClass: function () {
        console.log(this.class);
    },

    sayDesc: function () {
        console.log(`  Hello, I am ${this.name} and I am a ${this.age} year old level ${this.level} ${this.class}. `);

        if (this.isHalfling === true) {
            const yesHalf = `I am rather large for my kind and I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `;
            console.log();
            return console.log(yesHalf);
        } else {
            console.log(`I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `)
        }
    }

};

user1.sayName(); // USER here is assigning THIS above
//access the different properties inside the object
// console.log(user.skills);
// console.log(user.age, user.name);
user1.sayClass();
user1.sayDesc();


/////12-22-24 back to Udemy course///////////

/////// Part 2 - 44  Objects Methods/////////

const dustin = {            // 'this' the object calling the function
    firstName: 'Dustin',
    lastName: 'Wagner',
    birthYear: 1986,
    job: 'mechanic',
    friends: ['Josh', 'Chris', 'Justin'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2024 - this.birthYear;  //here 'this' is the object calling the function, so birthYear is dustin.birthYear

    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
    }
};

console.log(dustin.calcAge());

console.log(dustin.age);
console.log(dustin.age);
console.log(dustin.age);

// write method called getSummary, return string summarizing data about Dustin
// Dustin is a 38 year old mechanic, and has a / no drivers license.
console.log(dustin.getSummary());

*/

