



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
    constructor (name) {
        super(0,0,0,0);
        this.name = name;
    }
}