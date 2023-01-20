"use strict";
class Animal {
    constructor() {
        this.sex = "Male";
        this.age = 0;
        this.protectedInformation = "We know how to talk stupid humans";
    }
}
;
class Dog extends Animal {
    shareOurSecretToTheWorld() {
        console.log(this.protectedInformation);
        return this.protectedInformation;
    }
}
;
const dog = new Dog();
dog.age = 10;
dog.sex = "Female";
dog.shareOurSecretToTheWorld();
class Woman {
    constructor(age) {
        this.age = 0;
        this.age = age;
    }
    sayMyAge() {
        return this.age;
    }
}
class OldLady extends Woman {
    sayMyAge() {
        console.log(this.age);
    }
}
const patricia = new OldLady(56);
console.log(patricia.age);
