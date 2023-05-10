class BankAccount {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}
const myAccount = new BankAccount(333, "talat", 344444);
console.log(myAccount);
class BankAccount1 {
  public readonly id: number;
  public name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  getBalance() {
    console.log(`My current balance is ${this._balance}`);
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}
class StudentAccount extends BankAccount1 {
  test() {
    this.getBalance();
  }
}
const myaccount1 = new BankAccount1(55, "Nuhan", 5555555);
console.log(myaccount1);
//private property class er bahir theak access kora jaai nah

// private use na kore jodi protected use kora hoi tahle oi property access kora jai onno ekta class theak
export {};
