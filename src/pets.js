class Mammal {
    constructor(name, age=0) {
        this.name = name;
        this.age = age;
    }

    vocalize() {
        console.log(`${this.voice}, my name is ${this.name} and I am ${this.age} years old!`);
    }
}

export class Cat extends Mammal {
    voice = 'Meow';
}

export class Dog extends Mammal {
    voice = 'Woof';
}
