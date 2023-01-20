class Animal {
  public sex: string = "Male";
  age: number = 0;
  protected protectedInformation: string = "We know how to talk stupid humans";
};


class Dog extends Animal {

  shareOurSecretToTheWorld() {
    console.log(this.protectedInformation);
    return this.protectedInformation;
  }

};

const dog = new Dog();
dog.age = 10;
dog.sex = "Female";
dog.shareOurSecretToTheWorld();


class Woman {
  private age: number = 0;

  constructor(age:number){
    this.age = age;
  }
  sayMyAge():any {
    return this.age;
  }
}

class OldLady extends Woman {
  sayMyAge(): void {
      console.log(this.age);
  }
}

const patricia = new OldLady(56);
console.log(patricia.age);