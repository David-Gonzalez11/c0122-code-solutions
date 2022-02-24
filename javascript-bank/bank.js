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
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }

  }
  return null;

};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].getBalance()) {
      totalBalance += this.accounts[i].getBalance();
    }
  }
  return totalBalance;
};

// Bank.prototype.getTotalAssets = function () {
//   var totalBalance = 0;
//   for (var i = 0; i < this.accounts.length; i++) {
//     if (this.accounts[i].getBalance()) {
//       totalBalance += this.accounts[i].getBalance();

//     }
//   }
//   return totalBalance;
// };
