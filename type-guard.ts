//typescript a badha deowa type guard

//keyof guard
type Alphaneumaric = string | number;
function add(param1: Alphaneumaric, param2: Alphaneumaric): Alphaneumaric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
console.log(add("1", "3"));

console.log(add(4, 5));
// In Guard
type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
const normalUser1: NormalUserType = { name: "Mr kalo" };
const adminUser1: AdminUserType = { name: "ballo admin", role: "admin" };
const getUser = (user: NormalUserType | AdminUserType): string => {
  if ("role" in user) {
    return `i am an admin my role is : ${user.role} `;
  } else {
    return ` i am a Normal user`;
  }
};
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
//instanceof guard
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makesound() {
    console.log(`I am making sound`);
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`i am barking gheo gheo`);
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`i am meowaing`);
  }
}
const animal1 = new Dog("German vhai", "DOg"); //dog er instance
const animal2 = new Cat("persian vhai", "Cat");
const animal3 = new Animal("siyal", "uuuuuuuuuuuuuuu");
const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makesound();
  }
};

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};
const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};
getAnimal(animal3);
console.log(isCat(animal2));
console.log(isDog(animal3));
// type alias na kore type guard use kora better choice
export {};
