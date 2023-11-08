{
  // Getter and Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // addDeposit(amount: number) {
    //   this._balance += amount;
    // }

    // setter method
    set deposit(amount: number) {
      this._balance += amount;
    }

    // getBalance() {
    //   return this._balance;
    // }
    // getter method
    get myBalance() {
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(23124, "Mr Gorib", 123);

  poorAccount.deposit = 500;

  const myBalance = poorAccount.myBalance;

  //
}
