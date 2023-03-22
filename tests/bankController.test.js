const BankController = require('../controllers/bankController');

describe('BankController', () => {
  let bankController;

  beforeEach(() => {
    bankController = new BankController();
  });

  describe('Constructor', () => {
    it('should return a new instance of BankController', () => {
      expect(bankController).toBeInstanceOf(BankController);
    });
  });

  describe('Deposit (Method)', () => {
    it('should return a zero balance', () => {
      expect(bankController.account.balance()).toBe(0);
    });

    it('should add a single amount to the account and return it back', () => {
      bankController.deposit(2.50, new Date('21/03/2023'));

      expect(bankController.account.balance()).toBe(2.50);
    });

    it('should add multiple amounts to the account and return the total balance', () => {
      bankController.deposit(2.50, new Date('21/03/2023'));
      bankController.deposit(2.50, new Date('21/03/2023'));

      expect(bankController.account.balance()).toBe(5.00);
    });
  });

  describe('Withdraw (Method)', () => {
    it('should return an error when the amount being withdrawn is more than what it is in the account', () => {
      try {
        bankController.withdraw(2.99, new Date("21/03/2023"));
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Insufficient balance");
      }
    });

    it('should add a single balance to the account and withdraw that single balance to make the total balance 0.00', () => {
      bankController.deposit(100.00, new Date('21/03/2023'));

      bankController.withdraw(100.00, new Date('21/03/2023'));

      expect(bankController.account.balance()).toBe(0.00);
    });

    it('should add a single amount to the account and then withdraw multiple amounts. Then return the left over balance (2.55)', () => {
      bankController.deposit(8.00);

      bankController.withdraw(4.00);
      bankController.withdraw(1.45);

      expect(bankController.account.balance()).toBe(2.55);
    });
  });

  describe('PrintStatement', () => {

    it('should print the statement in the correct format', () => {
      console.log = jest.fn();
      expectedStatement = "date || debit || credit || balance\n" && "21/03/2023 || 100.00 || || 100.00" && "22/03/2023 || || 50.00 || -50.00";

      bankController.deposit(100.00, "21/03/2023");

      bankController.withdraw(50.00, "22/03/2023");

      bankController.print();

      expect(console.log).toHaveBeenCalledWith(expectedStatement);
    });
  });
});