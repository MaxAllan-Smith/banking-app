class Account {
  constructor() {
    this.transactions = [];
  }

  deposit(amount, date) {
    this.transactions.push({
      date,
      amount: +amount,
      balance: this.balance + amount
    });
  }

  withdraw(amount, date) {
    if (amount > this.balance()) {
      throw new Error('Insufficient balance');
    }
    
    this.transactions.push({
      date,
      amount: -amount,
      balance: this.balance - amount
    });
  }

  balance() {
    return parseFloat(this.transactions.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2));
  }
}

module.exports = Account;