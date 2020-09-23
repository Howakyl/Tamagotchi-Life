//TODO:
// fix distance pet walks

let $nameInput = $('.name-input');
let $petName = $('#pet-name');


// const $setPetName = $('.name-input');

// Parent class for Tamagotchis, with params of age, hunger, boredom, and sleep)
class Pet {
    constructor (age, hunger, boredom, sleep) {
        this.age = age;
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleep = sleep;
    }
};
//Tamagotchi class extending from Pet class, with param of name.
class Tamagotchi extends Pet {
    constructor (name = 'Tamagotchi') {
        super(0,0,0,0);
        this.name = name;
    }
};

//Instance of Tamagotchi class
const Tamagotchi1 = new Tamagotchi;



//function connecting Tamagotchi to $nameInput var. Allows user to give pet a name.
 let $changeName = $(document).ready(function () {
    $(":text").keyup(function () {
        $petName.text($(":text").val());
        return Tamagotchi1.name = $petName.text();
    });
});

console.log(Tamagotchi1.name);
