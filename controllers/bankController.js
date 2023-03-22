const Account = require('../models/accountModel');
class BankController {
  constructor() {
    this.account = new Account();
  }

  deposit(amount, date) {
    this.account.deposit(amount, date);
  }

  withdraw(amount, date) {
    this.account.withdraw(amount, date);
  }

  print() {
    console.log("date || debit || credit || balance");
    let balance = 0;
    this.account.transactions.slice().reverse().forEach((transaction) => {
      const { date, amount } = transaction;
      if (amount > 0) {
        balance += amount;
        console.log(`${date} || ${amount.toFixed(2)} || || ${balance.toFixed(2)}`);
      } else {
        balance += amount;
        console.log(`${date} || || ${(Math.abs(amount)).toFixed(2)} || ${balance.toFixed(2)}`);
      }
    });
  }
}

module.exports = BankController;