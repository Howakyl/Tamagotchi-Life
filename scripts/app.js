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
};

//Instance of Tamagotchi class
const Tamagotchi1 = new Tamagotchi;

//Stat Globals
Tamagotchi1.age = petAge;
Tamagotchi1.boredom = petBoredom;
Tamagotchi1.sleep = petSleepiness;

//function that gives Tamagotchi1 a name upon the "Start" button being clicked. Dependent upon the user inputting text in 'choose a name' field.
//also removes the 'hidden' class from Sprite.
$('.name-button').on('click' , function () {
    $sprite.toggleClass('hidden');
    $petName.text($(":text").val());
    // startTimer();
    return Tamagotchi1.name = $petName.text();
});

//function to keep track of time
const startTimer = function () {
    const timer = setInterval(function () {
        startTime ++;
        console.log(`time is: ${startTime}`)
        trackHunger();
    }, 1000);
}

//function to track hunger, assigns to Tamagotchi1.hunger - updates Hunger stat on game.
const trackHunger = function () {
    if (startTime % 10 === 0) {
        petHunger++;
        Tamagotchi1.hunger = petHunger;
        console.log(Tamagotchi1.hunger);
    }
    $('.hunger-stat').text(`Hunger: ${Tamagotchi1.hunger}`);
}

// startTimer();

