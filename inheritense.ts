class Person {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(): string {
    return ` This ${this.name} will sleep for ${this.age}`;
  }
}
const person1 = new Person("Talat", 25, "halishahar");
console.log(person1.makeSleep());
class Student extends Person {
  //   designation: string;
  grade: string;
  constructor(
    name: string,
    age: number,
    address: string,
    // designation: string,
    grade: string
  ) {
    super(name, age, address);
    // this.designation = designation;
    this.grade = grade;
  }
  getGrade(Grade: string): string {
    return ` This student named ${this.name} pass the exam with ${Grade} Grade`;
  }
}
const teacher1 = new Student("akil alam", 45, "mog bazae", "Lecturer");
console.log(teacher1.getGrade("A"));
