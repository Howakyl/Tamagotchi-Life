//TODO: 
//create baby form and sleeping baby form 
//change to evolved form when age = 2
//sleepy icon when night time


//Name & sprite globals
let $nameInput = $('.name-input');
let $petName = $('#pet-name');

//Time Globals
let startTime = 0;
let dayTime = true;

//Stat Globals


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
        let $sprite = $('.sprite');
        let $petName = $('#pet-name');
        $sprite.toggleClass('hidden');
        $petName.text($(":text").val());
            startTimer();
        return this.name = $petName.text();
    })

    //function to track age, assigns to Tamagotchi1.age - updates Age start every 30sec.
    trackAge = function () {
        if (startTime % 30 === 0) {
            this.age++;
        }
        $('.age-stat').text(`Age: ${this.age}`);
    }

    //function to track hunger, assigns to Tamagotchi1.hunger - updates Hunger stat on game every 20 sec.
    trackHunger = function () {
        if (startTime % 20 === 0) {
            this.hunger++;
        }
        $('.hunger-stat').text(`Hunger: ${this.hunger}`);
    }

    //function attached to $foodButton event listener, reduces hunger by 1 when clicked.
    reduceHunger = function () {
        if (this.hunger > 0) {
            return this.hunger -= 1;
        }
    }

    //function to track boredom, assigns to Tamagotchi1.boredom - updates boredom on game ever 10 sec.
    trackBoredom = function () {
        if (startTime % 10 === 0) {
            this.boredom++;
        }
        $('.boredom-stat').text(`Boredom: ${this.boredom}`);
    }

    //function attached to $playButton, reduces boredom when clicked
    reduceBoredom = function () {
        if (this.boredom > 0) {
            return this.boredom -= 1;
        }
    }

    //function to track boredom, sleepiness resets to 0 when nighttime
    trackSleepiness = function () {
        $('.sleepiness-stat').text(`Sleepiness: ${this.sleep}`);
        if (dayTime === false) {
            this.sleep = 0;
        }
    }

    //function attached to $playButton, increases sleepiness when clicked, and boredom > 0
    increaseSleepiness = function () {
        if (this.sleep > -1 && this.boredom > 0) {
            return this.sleep += 1;
        }
    }

};

//Instance of Tamagotchi class
const Tamagotchi1 = new Tamagotchi;

//function to keep track of time - calls Tamagotchi stat functions 
const startTimer = function () {
    const timer = setInterval(function () {
        //CONDITIONAL TO END GAME
        if (Tamagotchi1.hunger === 10 || Tamagotchi1.boredom === 10 || Tamagotchi1.sleep === 10) {
            clearInterval(timer);
            let endGame = confirm(`Looks like ${Tamagotchi1.name} is exhausted... do you want to play again?`);
            if (endGame) {location.reload();}
        }
        startTime ++;
        console.log(`time is: ${startTime}`) //DONT FORGET TO REMOVE THIS AT END!!!
        $toggleGameBackground();
        Tamagotchi1.trackHunger();
        Tamagotchi1.trackAge();
        Tamagotchi1.trackSleepiness();
    }, 1000);
}

//toggles game screen background, and toggles trackBoredom() function.
const $toggleGameBackground = function () {
    if (dayTime === true) {
        $('#game-screen').css('background-color', 'var(--console-screen)');
        Tamagotchi1.trackBoredom();
    } else {
        $('.sprite').attr("src" , "images/sprite-0-sleeping.png");
        $('#game-screen').css('background-color', '#4b6633');
    }
};

$('.food-button').on('click' , () => {
    Tamagotchi1.reduceHunger();
    $('.heart').fadeToggle(2000);
    $('.heart').fadeToggle(2000);
});

$('.play-button').on('click' , () => {
    Tamagotchi1.increaseSleepiness();
    Tamagotchi1.reduceBoredom();
    spriteBounce($('.sprite'), 3, '20px', 300);
});

//changes dayTime from day to night when $sleepButton is clicked. When Night phase, pet stop moving.
$('.sleep-button').on('click' , () => {
    $('.sprite').toggleClass('pause');
    if (dayTime === true) {
        dayTime = false;
    } else if (dayTime === false) {
        dayTime = true;
        $('.sprite').attr("src" , "images/adult-sprite-0.png");
    }
});

//function that animates a 'bounce' on sprite when 'Play' button is clicked
function spriteBounce(element, times, distance, speed) {
    for (i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance},speed)
            .animate({marginTop: '+='+distance},speed);
    }
};