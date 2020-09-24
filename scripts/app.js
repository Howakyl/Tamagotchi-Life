//TODO:

//Name & sprite globals
let $nameInput = $('.name-input');
let $petName = $('#pet-name');
let $sprite = $('.sprite');

//game button globals
const $foodButton = $('.food-button');
const $playButton = $('.play-button');
const $sleepButton = $('.sleep-button');

//Time Globals
let startTime = 0;

//Stat Globals
let petAge = 0;
let petHunger = 0;
let petBoredom = 0;
let petSleepiness = 0;

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

    //function to track age, assigns to Tamagotchi1.age - updates Age start every 30sec.
    trackAge = function () {
        if (startTime % 30 === 0) {
            petAge++;
            this.age = petAge;
        }
        $('.age-stat').text(`Age: ${this.age}`);
    }

    //function to track hunger, assigns to Tamagotchi1.hunger - updates Hunger stat on game every 20 sec.
    trackHunger = function () {
        if (startTime % 20 === 0) {
            petHunger++;
            this.hunger = petHunger;
        }
        $('.hunger-stat').text(`Hunger: ${this.hunger}`);
    };

    //function attached to $foodButton event listener, reduces hunger by 1 when clicked.
    reduceHunger = function () {
        if (this.hunger > 0) {
            return this.hunger -= 1;
        }
    }

    //function to track boredom, assigns to Tamagotchi1.boredom - updates boredom on game ever 10 sec.
    trackBoredom = function () {
        if (startTime % 10 === 0) {
            petBoredom++;
            this.boredom = petBoredom;
        }
        $('.boredom-stat').text(`Boredom: ${this.boredom}`);
    }
};

//Instance of Tamagotchi class
const Tamagotchi1 = new Tamagotchi;

//function to keep track of time - calls Tamagotchi stat functions 
const startTimer = function () {
    const timer = setInterval(function () {
        startTime ++;
        console.log(`time is: ${startTime}`)
        Tamagotchi1.trackHunger();
        Tamagotchi1.trackAge();
        Tamagotchi1.trackBoredom();
    }, 1000);
}


//reduces hunger by 1 when food-button is clicked.
$foodButton.on('click' , () => {
    Tamagotchi1.reduceHunger();
});
    
