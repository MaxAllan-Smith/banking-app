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

### Depositing Balance

```javascript

```
