class BankAccount1 {
  public readonly id: number;
  public name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  //getter
  get balance(): number {
    return this._balance;
  }
  // getBalance(): number {
  //   return this._balance;
  // }
  //setter
  set deposit(amount: number) {
    this._balance = this.balance + amount;
  }
  addDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
}
class StudentAccount extends BankAccount1 {
  test() {
    // this.getBalance();
  }
}
const myaccount1 = new BankAccount1(55, "Nuhan", 55);
console.log(myaccount1);
myaccount1.addDeposit(20);
myaccount1.deposit = 30;
console.log("Total Amount:", myaccount1.balance);
