//static use korle property er age seta tokhn oi class er static property hoiye jaai tokhn ar constructor use kora lage nah & oi property ar this key word diye access kora jaai nah tokhn seta class er naam diye access korte hoi
class Counter {
  static counter: number = 1;

  static increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}
console.log(Counter.increment());
console.log(Counter.increment());
// const instance = new Counter();
// const instance1 = new Counter();
// console.log(instance.increment());
// console.log(instance.increment());
// console.log(instance.decrement());
// console.log(instance1.decrement());
// jodi method gular ageo static key word use  kora hoi tahle tokhn ar instance create kora lagbe nah or access kora possible hove nah instance diye tokhn class name diye method gula ke access korte hove
