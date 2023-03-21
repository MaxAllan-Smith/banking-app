const Account = require("../models/accountModel");

describe('Account', () => {
  describe('Constructor', () => {
    it('should create a new instance of Account', () => {
      const account = new Account();
      expect(account).toBeInstanceOf(Account);
    });

    it('should return a zero balance', () => {
      const account = new Account();
      expect(account.balance()).toEqual(0);
    });
  });

  describe('Deposit (Method)', () => {
    it('after depositing a single amount of 200.01, it should return the overall balance of 200.01', () => {
      const account = new Account();
      account.deposit(200.01, "21/03/2023");
      expect(account.balance()).toEqual(200.01);
    });

    it('after depositing 3 amounts (10.00, 20.00 and 30.00), it should return an overall balance of 60.00', () => {
      const account = new Account();
      account.deposit(10.00);
      account.deposit(20.00);
      account.deposit(30.00);
      expect(account.balance()).toEqual(60.00);
    });
  });
});