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
      bankController.deposit(0.00, new Date("21/03/2023"));
      expect(bankController.account.balance()).toEqual(0);
    });
  });
});