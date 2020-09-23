//TODO:

//GLOBALS
let $nameInput = $('.name-input');
let $petName = $('#pet-name');
let $sprite = $('.sprite');

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



//function that gives Tamagotchi1 a name upon the "Start" button being clicked. Dependent upon the user inputting text in 'choose a name' field.
//also removes the 'hidden' class from Sprite.
$('.name-button').on('click' , function () {
    $sprite.toggleClass('hidden');
    $petName.text($(":text").val());
    return Tamagotchi1.name = $petName.text();
});

