import $ from 'jquery';
//Time Globals
let startTime = 0;
let dayTime = true;

// Parent class for Tamagotchis, with params of age, hunger, boredom, and sleep)
interface Pet {
    age: number;
    hunger: number;
    boredom: number;
    sleep: number;
}

interface Tamagotchi {
    name: string | string[] ;
    // changeName: JQuery<HTMLElement>;
}


class Pet {
    // age: number;

    constructor (age: number, hunger: number, boredom: number, sleep: number) {
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
    changeName = $('.name-button').on('click' , () => {
        // let $sprite = ;
        $('.sprite').toggleClass('hidden');
        $('#pet-name').text($(":text").val());
            startTimer();
        $('.name-button').prop('disabled' , true);
        return this.name = $('#pet-name').text();
    })

    //function to track age, assigns to Tamagotchi1.age - updates Age start every 30sec.
    trackAge = function () {
        if (startTime % 30 === 0) {
            this.age++;
        }
        $('.age-stat').text(`Age: ${this.age}`);
    }

    //changes sprite if pet age is greater than 1
    evolvePet = function () {
        if (this.age > 1 && dayTime) {
            $('.sprite').attr("src" , "./images/adult-sprite-0.png");
        }
    }

    //track hunger, assigns to Tamagotchi1.hunger - updates Hunger stat on game every 10 sec.
    trackHunger = function () {
        if (startTime % 10 === 0) {
            this.hunger++;
        }
        $('.hunger-stat').text(`Hunger: ${this.hunger}`);
    }

    //attached to $foodButton event listener, reduces hunger by 1 when clicked.
    reduceHunger = function () {
        if (this.hunger > 0) {
            return this.hunger -= 1;
        } 
    }

    //track boredom, assigns to Tamagotchi1.boredom - updates boredom on game ever 5 sec.
    trackBoredom = function () {
        if (startTime % 5 === 0) {
            this.boredom++;
        }
        $('.boredom-stat').text(`Boredom: ${this.boredom}`);
    }

    // attached to $playButton, reduces boredom when clicked
    reduceBoredom = function () {
        if (this.boredom > 0) {
            return this.boredom -= 1;
        }
    }

    //tracks sleepiness on screen, sleepiness resets to 0 when nighttime
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
            $('.sprite').remove();
            clearInterval(timer);
            let endGame = confirm(`Looks like ${Tamagotchi1.name} is exhausted... do you want to play again?`);
            if (endGame) {location.reload();}
        }
        startTime ++;
        $toggleGameBackground();
        Tamagotchi1.trackHunger();
        Tamagotchi1.trackAge();
        Tamagotchi1.evolvePet();
        Tamagotchi1.trackSleepiness();
    }, 1000);
}

//toggles game screen background, and toggles trackBoredom() function.
//also toggles sprite image to sleeping
const $toggleGameBackground = function () {
    if (dayTime === true) {
        $('#game-screen').css('background-color', 'var(--console-screen)');
        Tamagotchi1.trackBoredom();
    } else {
        $('#game-screen').css('background-color', '#4b6633');
        if (Tamagotchi1.age > 1) {
            $('.sprite').attr("src" , "./images/sprite-0-sleeping.png");
        } else if (Tamagotchi1.age < 2) {
            $('.sprite').attr("src" , "./images/baby-sprite-sleeping-0.png");
        };
    }
};

// function to make pixel heart fade in, then fade out
$('.food-button').on('click' , () => {
    Tamagotchi1.reduceHunger();
    $('.heart').fadeToggle(1500);
    $('.heart').fadeToggle(1500);
});

$('.play-button').on('click' , () => {
    Tamagotchi1.increaseSleepiness();
    Tamagotchi1.reduceBoredom();
    spriteBounce( 3, '20px', 300);
});

//function that animates a 'bounce' on sprite when 'Play' button is clicked - pushes sprite up and down with margin, 3 times (called above)
function spriteBounce(times, distance, speed) {
    for (let i = 0; i < times; i++) {
        $('.sprite').animate({marginTop: '-='+distance},speed).animate({marginTop: '+='+distance},speed);
    }
};

//changes dayTime from day to night when $sleepButton is clicked. When Night phase, pet stop moving.
$('.sleep-button').on('click' , () => {
    $('.sprite').toggleClass('pause');
    $('.snore').toggleClass('hidden');
    $('.snore').toggleClass('pause');
    if (dayTime === true) {
        dayTime = false;
    } else if (dayTime === false) {
        dayTime = true;
        if (Tamagotchi1.age >= 2) {
            $('.sprite').attr("src" , "./images/adult-sprite-0.png");
        } else if (Tamagotchi1.age < 2) {
            $('.sprite').attr("src" , "./images/baby-sprite-0.png");
        }
    }
});

