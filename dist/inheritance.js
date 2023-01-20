"use strict";
class Person {
    constructor() {
        this.firstName = '';
        this.age = 0;
    }
}
class Adult extends Person {
    constructor() {
        super(...arguments);
        this.job = '';
    }
}
const yvens = new Adult();
yvens.job = "Formateur";
yvens.firstName = 'Yvens';
yvens.age = 26;
