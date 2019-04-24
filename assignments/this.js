/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window / Global
* 2. Implicit 
* 3. New 
* 4. Explicit 
*
* write out a code example of each explanation above
*/

// Principle 1
// Window / Global
// code example for Window Binding
function global(Window){
    console.log(this);
    return `This is a ${Window} binding`;
}

console.log(global("Window / Global"));

// Principle 2
// Implicit
// code example for Implicit Binding
const lightYear = {
    greet: 'Welcome',
    intro: function(name){
        console.log(`${this.greet} ${name}, to Infinity and Beyond!`)
        console.log(this);
    }
};

lightYear.intro('Buzz');

// Principle 3
// New 
// code example for New Binding
function acquire(weapon) {
    this.weapons = weapon;
    this.obtained = "You have obtained a ";
    this.achieved = function() {
        console.log(this.obtained + this.weapons + '!');
        console.log(this);
    }
}

const axe = new acquire('Axe');
const doubleAxe = new acquire('Double Axe');
const sword = new acquire('Sword');
const dagger = new acquire('Dagger');
const stave = new acquire('Stave');
const wand = new acquire('Wand');
const bow = new acquire('Bow');
const xbow = new acquire('Crossbow');

axe.achieved();
doubleAxe.achieved();
sword.achieved();
dagger.achieved();
stave.achieved();        
wand.achieved();
bow.achieved();
xbow.achieved();

// Principle 4
// Explicit
// code example for Explicit Binding

const Mig = {
    name: "Tiny",
    feet: 3,
    job: "Beta Tester",
    update: function() {
        return `${this.name} is best. (He likes to speak in third person.)`;
    }
}

const pup = {
    name: "Gir",
    feet: 2,
    job: "Destroy the world",
    update: function() {
        return `I am ${this.name}`;
    }
}

const games = ['Call of Duty', 'Battlefield', 'Counter-Strike'];
const invader = ['"Aww, It likes me!"', '"I loveded you piggy, I loveded you"', '"Where are my walnuts?"'];

function present(game1, game2, game3) {
    return `${this.name} is skilled in ${game1}, ${game2}, and ${game3}!`;
}

function invaderZim(phrase1, phrase2, phrase3) {
    return `${this.name} best phrases are ${phrase1}, ${phrase2}, ${phrase3}!`
}

console.log(present.apply(Mig, games));
console.log(invaderZim.call(pup, ...invader));