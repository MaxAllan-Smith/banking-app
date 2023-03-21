const Account = require('../models/accountModel');
class BankController {
  constructor() {
    this.account = new Account();
  }

  deposit(amount, date) {
    this.account.deposit(amount, date);
  }
}

module.exports = BankController;