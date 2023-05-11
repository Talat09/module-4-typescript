// poly ---> onek gula morphism --> rup
class Person {
  takeNap() {
    console.log(`i am sleeping 8 hours per day`);
  }
}
class Student extends Person {
  takeNap(): void {
    console.log(`I m sleeping 10 hours per day`);
  }
}
class Developers extends Person {
  takeNap(): void {
    console.log(`I am sleeping 5 hours per day`);
  }
}
const getNav = (param: Person) => {
  param.takeNap();
};
const person1 = new Person();
const student = new Student();
const developers = new Developers();

getNav(person1);
getNav(student);
getNav(developers);
//another example
class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const getAreaOfShape = (param: Shape) => {
  console.log(param.getArea());
};
getAreaOfShape(new Circle(3.1416));
getAreaOfShape(new Rectangle(10, 5));
export {};
