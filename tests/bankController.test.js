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
});