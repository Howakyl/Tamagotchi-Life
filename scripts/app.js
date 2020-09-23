let $nameInput = $('name-input');
let $petName = $('#pet-name');



// Parent class for Tamagotchis, with params of age, hunger, boredom, and sleep)
class Pet {
    constructor (age, hunger, boredom, sleep) {
        this.age = age;
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleep = sleep;
    }
};

class Tamagotchi extends Pet {
    constructor (name = 'Tamagotchi') {
        super(0,0,0,0);
        this.name = name;
    }
};

const Tamagotchi1 = new Tamagotchi;
console.log(Tamagotchi1.name);

Tamagotchi.name = $nameInput;

$petName.text(`${Tamagotchi1.name} - age: ${Tamagotchi1.age}`);