//TODO:

//Name & sprite globals
let $nameInput = $('.name-input');
let $petName = $('#pet-name');
let $sprite = $('.sprite');

//Time Globals
let startTime = 0;

//Stat Globals
let petAge = 0;
let petHunger = 0;
let petBoredom = 0;
let petSleepiness = 0;

$('.food-button') 

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

    //function that gives Tamagotchi1 a name upon the "Start" button being clicked. Dependent upon the user inputting text in 'choose a name' field.
    //also removes the 'hidden' class from Sprite.
    changeName = $('.name-button').on('click' , function () {
        $sprite.toggleClass('hidden');
        $petName.text($(":text").val());
        startTimer();
        return this.name = $petName.text();
    })

    trackAge = function () {
        if (startTime % 2 === 0) {
            petAge++;
            this.age = petAge;
        }
        $('.age-stat').text(`Age: ${this.age}`);
    }

    //function to track hunger, assigns to Tamagotchi1.hunger - updates Hunger stat on game.
    trackHunger = function () {
        if (startTime % 20 === 0) {
            petHunger++;
            this.hunger = petHunger;
        }
        $('.hunger-stat').text(`Hunger: ${this.hunger}`);
    }
};

//Instance of Tamagotchi class
const Tamagotchi1 = new Tamagotchi;

//function to keep track of time
const startTimer = function () {
    const timer = setInterval(function () {
        startTime ++;
        console.log(`time is: ${startTime}`)
        Tamagotchi1.trackHunger();
        Tamagotchi1.trackAge();
    }, 1000);
}



// startTimer();

