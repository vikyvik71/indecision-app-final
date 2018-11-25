// arguments not longer bound with arrow functions
const add = function(a,b) {
    console.log(arguments);
    return a + b;
};

const addArrow = (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));
console.log(addArrow(55, 2));

// this not longer bound with arrow functions

const user = {
    name: 'Alfred',
    cities: ['Milan', 'Turin', 'Florence'],
    printPlacesLived() {
        
        const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
        console.log(cityMessages);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

user.printPlacesLived();

// challenge

const multiplier = {
    numbers: [3,4,5],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());