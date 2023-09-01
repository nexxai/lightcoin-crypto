let balance = 500.0;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let result = 0;

    for (let transaction of this.transactions) {
      result += transaction.value;
    }

    return result;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log("Transaction 1:", t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log("Transaction 2:", t2);

t3 = new Deposit(120.0, myAccount);
t3.commit();
console.log("Transaction 3:", t3);

console.log("Balance:", myAccount.balance);
