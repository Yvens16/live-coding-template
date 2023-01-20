class Person {
  firstName = '';
  age = 0;
}

class Adult extends Person {
  job = '';
}

const yvens = new Adult();
yvens.job = "Formateur";
yvens.firstName = 'Yvens';
yvens.age = 26;