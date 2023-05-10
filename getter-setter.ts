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
