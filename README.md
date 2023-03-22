# Bank Tech Test - Planning

## General Understandings

Assuming that the clients account does not need to be created and that this test purely replies on the functionality of the user being able to deposit a balance, withdraw a balance and printing a statement of the remaining balance. Here is my overall structure:

For keeping records of my general workflow, I'll be using **Git/GitHub**
This will show all my commits, when I commited them and what changes were made.
(_How I initialzed Git/GutHub_)

```
git init
```

[GitHub Documentation](https://docs.github.com/en)

---

For the dependencies that my project will need, I'll be using '**Node Package Manager**'

(_How I initialized Node Package Manager (NPM)_)

```
npm init -y
```

[Node Package Manager (NPM) Documention](https://docs.npmjs.com/)

---

###### (For more information on Git and NPM, please follow the links provided above)

## NPM Dependencies

• **JEST** (_Testing_)

(_How I installed and initialized JEST_)

```
npm install --save-dev jest
```

```
jest --init
```

---

## User Stories

Here are some quick user stories that I made to help plan my approach.

### Depositing a balance

```
As a user that aready owns an account
I want to be able to deposit money into my account
```

```
As a user that already owns an account
After depositing some money
I want to be able to view the updated balance
```

### Withdrawing a balance

```
As a user that already owns an account
I want to be able to withdraw money from my account
```

```
As a user that already owns an account
After withdrawing money from my account
I want to be able to view the updated balance
```

```
As a user that already owns an account
Before withdrawing any money from my account
I want to make sure there are enough funds in the account to be able to withdraw the amount that I want
If there aren't enough funds, then I want to receieve and error message telling me that I cannot withdraw that amount that I requested due to the lack of account funds in the account.
```

### Viewing and Printing the bank statement

```
As a user that already owns an account
At any time, I want to be able to view my current funds in the account and print them
```

## Project Testing - Plan

Below are a list of tests I plan to write as a starting point to this application.

(The app with fully test driven)

### Constructor

```javascript
describe("Constructor", () => {
  it("should create a new instance of Account", () => {
    const account = new Account();

    expect(account).toBeInstanceOf(Account);
  });

  it("should return a zero balance", () => {
    const account = new Account();

    expect(account.balance()).toEqual(0);
  });
});
```

### Deposit Method

```javascript
describe("Deposit (Method)", () => {
  it("after depositing a single amount of 200.01, it should return the overall balance of 200.01", () => {
    const account = new Account();

    account.deposit(200.01, "21/03/2023");

    expect(account.balance()).toEqual(200.01);
  });

  it("after depositing 3 amounts (10.00, 20.00 and 30.00), it should return an overall balance of 60.00", () => {
    const account = new Account();

    account.deposit(10.0);
    account.deposit(20.0);
    account.deposit(30.0);

    expect(account.balance()).toEqual(60.0);
  });
});
```

### Withdraw Method

```javascript
describe("Withdraw (Method)", () => {
  it("should add a balance of 250.99, then withdraw a single amount of 50.99 and return a balance of 200.00", () => {
    const account = new Account();

    account.deposit(250.99);

    account.withdraw(50.99);

    expect(account.balance()).toEqual(200.0);
  });

  it("should add a balance of 320.99, then withdraw (48.76, 20.99 and 5.98) and return the remaining balance of 245.26", () => {
    const account = new Account();

    account.deposit(320.99);

    account.withdraw(48.76);
    account.withdraw(20.99);
    account.withdraw(5.98);

    expect(account.balance()).toEqual(245.26);
  });

  it("should return an error message when the user tries to withdraw an amount and there is not enough funds in the balance", () => {
    const account = new Account();

    try {
      account.withdraw(20.0);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Insufficient balance");
    }
  });
});
```
