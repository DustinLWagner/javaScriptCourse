'useStrict';

//Object, like user profile 

//object 1
const user1 = {
    name: 'Edwin',
    class: 'Rogue',
    race: 'Gnome',
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
        console.log(`  Hello, I am ${this.name} and I am a  level ${this.level} ${this.class} ${this.race}. ${this.isHalfling ? `I am rather large for my kind and I excel at` : `I excel at`} ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}.`);

        //Replaced following with Ternary Operation
        // if (this.isHalfling === true) {
        //     const yesHalf = `I am rather large for my kind and I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `;
        //     console.log();
        //     return console.log(yesHalf);
        // } else {
        //     console.log(`I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `)
        // }
    }

};


//object 2
const user2 = {
    name: 'Renflower',
    class: 'Druid',
    race: 'Elf',
    level: 12,
    isHalfling: false, // boolean
    skills: ['Druid Magic', 'Wild Shape', 'Survival Skills'], // array


    sayName: function () {
        console.log(this.name);
    },

    sayClass: function () {
        console.log(this.class);
    },

    sayDesc: function () {
        console.log(`  Hello, I am ${this.name} and I am a  level ${this.level} ${this.class} ${this.race}. ${this.isHalfling ? `I am rather large for my kind and I excel at` : `I excel at`} ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}.`);

        //Replaced following with Ternary Operation
        // if (this.isHalfling === true) {
        //     const yesHalf = `I am rather large for my kind and I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `;
        //     console.log();
        //     return console.log(yesHalf);
        // } else {
        //     console.log(`I excel at ${this.skills[0]}, ${this.skills[1]}, and ${this.skills[2]}. `)
        // }
    }

};

user1.sayName();
// user1.sayClass();
// USER here is assigning THIS above
//access the different properties inside the object
// console.log(user.skills);
// console.log(user1.level, user1.race);

user1.sayDesc();
user2.sayName();
user2.sayDesc();