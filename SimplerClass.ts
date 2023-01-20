class BasicClass {
  surname: string;
  private age: number;

  constructor(surname: string, age: number) {
    this.surname = surname;
    this.age = age;
  }

  public greet() {
    console.log(`Bonjour, ${this.surname}, j'ai ${this.age} ans!`);
  }

}

// ##################### Tests #####################
const basic = new BasicClass("toto", 18);
console.log(basic.surname + " " + basic.age);
// ##################### Tests #####################







class SimplerClass {
  constructor(public surname: string, private age: number) { }

  public greet() {
    console.log(`Bonjour, ${this.surname}, j'ai ${this.age} ans!`);
  }

}

// ##################### Tests #####################
const simpler = new SimplerClass("titi", 36);
console.log(simpler.surname + " " + simpler.age);
// ##################### Tests #####################
