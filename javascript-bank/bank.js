/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    // this.accounts.push(new Account(this.nextAccountNumber, holder));
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;

    return this.accounts.length;

  } else if (Number.isInteger(balance) !== 0) {

    return null;
  }
};

// havent touched from here down //

Bank.prototype.getAccount = function (number) {
  if (this.openAccount !== (number)) {
    return null;
  } else {
    return this.getAccount();
  }
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalBalance = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i];
    }
    return totalBalance;
  }
};

// Account.prototype.deposit = function (amount) {
//   if (Number.isInteger(amount) === true) {
//     return true;
//   } else {
//     return false;
//   }
// };
