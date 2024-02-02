// Exercice 1

const whatIsMyType = [1, 2, 3, 4, 5];

const carBrand = 'Tesla';
const price = 40000;
const currency = '€';

// Exercice 2
const johnAge = 24;

const ages = [10, 51, 17, 48, 23];
let numberOfAdults;

// Exercice 3
class Burger {
    constructor(sauce = 'ketchup', cheese = 'cheddar', withFries = true, veggie = false) {
        this.sauce = sauce;
        this.cheese = cheese;
        this.withFries = withFries;
        this.veggie = veggie;
    }

    describe() {
        return `Ce burger${this.veggie ? ' veggie' : ''} au ${this.cheese} sauce ${this.sauce} sera servi ${this.withFries ? 'avec' : 'sans'} frites.`;
    }
}
