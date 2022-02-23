/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var totalDeposits = 0;
    var totalWithdrawals = 0;
    var depositsArray = this.transactions.filter(transaction => transaction.type === 'deposit');
    var withdrawalArray = this.transactions.filter(transaction => transaction.type === 'withdrawal');

    for (var i = 0; i < depositsArray.length; i++) {
      totalDeposits += depositsArray[i].amount;
    }

    for (var x = 0; x < withdrawalArray.length; x++) {
      totalWithdrawals += withdrawalArray[x].amount;
    }

    return totalDeposits - totalWithdrawals;
  }
};
