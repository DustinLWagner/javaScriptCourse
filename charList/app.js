'useStrict';

//Object, like user profile 

//object 1
const user1 = {
    name: 'Edwin', //string
    class: 'Rogue',
    race: 'gnome',       // number
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
        console.log(`  Hello, I am ${this.name} and I am a ${this.race} year old level ${this.level} ${this.class}. `);

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


//object 2
const user2 = {
    name: 'Renflower', //string
    class: 'Rogue',
    race: 'Elf',       // number
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
        console.log(`  Hello, I am ${this.name} and I am a ${this.race} year old level ${this.level} ${this.class}. `);

        if (this.isHalfling === true) {
            const yesHalf = `I am rather large for my kind and I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `;
            console.log();
            return console.log(yesHalf);
        } else {
            console.log(`I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `)
        }
    }

};

