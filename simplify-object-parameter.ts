// class Prani {
//     //by default property gula public thake property gular samne public key word ta likhte hobe
//    public name: string;
//    public species: string;
//    public sound: string;
//     //parameter properties bole simplify kora ke
//     constructor(public name: string, public species: string,public sound: string) {
//       this.name = name;
//       this.species = species;
//       this.sound = sound;
//     }
//     makeSound() {
//       console.log(` This ${this.name} said ${this.sound}`);
//     }
//   }

//   const animal11 = new Animal("TOmmy", "dog", "gheo gheo");
//   const cat1 = new Animal("Mina Mina", "cat", "mheo mheo");
//   animal1.makeSound();
//   cat1.makeSound();

//after simplify code
class Prani {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}
  makeSound() {
    console.log(` This ${this.name} said ${this.sound}`);
  }
}

const animal11 = new Prani("TOmmy", "dog", "gheo gheo");
const cat1 = new Prani("Mina Mina", "cat", "mheo mheo");
animal1.makeSound();
cat1.makeSound();
