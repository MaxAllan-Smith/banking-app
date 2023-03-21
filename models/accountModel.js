class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount, date) {
    this.transactions.push({
      date,
      amount,
      balance: this.balance + amount
    });
  }

  balance() {
    return this.transactions.reduce((acc, curr) => acc + curr.amount, 0);
  }
}

module.exports = Account;