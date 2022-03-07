class Person {
    constructor(name) {
        this.name = name;
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Superman extends Person {
    sleep() {
        console.log(`${this.name} doesn't sleep at all`);
    }
}