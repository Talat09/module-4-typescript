//class declare korba sekhane je ekta method declare korba oi method er je real implementor somporke amra janbo nah but shape ta bujha jave

//** interface */
// interface IVehecle {
//   name: string;
//   model: string;
// }
// const vehicle: IVehecle = {
//   name: "Car",
//   model: "3kerer",
// };

// interface Ivehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vhecle implements Ivehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log("im starting Engine");
//   }
//   stopEngine(): void {
//     console.log("i am stop Engine");
//   }
//   move(): void {
//     console.log("i am moving method");
//   }
//   test() {
//     console.log(`I am for testing purupose`);
//   }
// }
// const vehecles1 = new Vhecle("car", "toyota", 4444);
// console.log(vehecles1);
// console.log(vehecles1.startEngine());

//** abstraction */
// ekjon leader er moto kore tar onusari hote chai ekta class ke onno class follow korbe
abstract class Vhihecle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("i am moving");
  }
  test() {
    console.log(`I am for testing purupose`);
  }
}
//abstract key word use korle instance create korte parbe nah
class Car extends Vhihecle {
  startEngine(): void {
    console.log("i am starting");
  }
  stopEngine(): void {
    console.log("stoping engine");
  }
}
const car1 = new Car("car", "Hunda", 2027);
car1.startEngine();
