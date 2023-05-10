class Animal {
  //by default property gula public thake property gular samne public key word ta likhte hobe
  name: string;
  species: string;
  sound: string;
  //parameter properties bole simplify kora ke
  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(` This ${this.name} said ${this.sound}`);
  }
}

const animal1 = new Animal("TOmmy", "dog", "gheo gheo");
const cat = new Animal("Mina Mina", "cat", "mheo mheo");
animal1.makeSound();
cat.makeSound();
