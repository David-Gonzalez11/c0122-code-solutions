// /* exported Bank */
// function Bank() {
//   this.nextAccountNumber = 1;
//   this.accounts = [];
// }

// Bank.prototype.openAccount = function (holder, balance) {
//   if (Number.isInteger(balance) && balance > 0) {
//     this.accounts.push(new Account('balance'));
//     for (var i = 0; i < this.accounts.length; i++) {

//     }

//   } else if (Number.isInteger(balance) !== 0) {

//     return null;
//   }
//   this.nextAccountNumber++;
// };

// Bank.prototype.getAccount = function (number) {
//   if (this.openAccount !== (number)) {
//     return null;
//   }
// };

// Bank.prototype.getTotalAssets = function () {
//   if (this.accounts.length === 0) {
//     return 0;
//   } else {
//     var totalBalance = 0;
//     var balancess = this.accounts.filter(bank => bank.type === 'accounts');
//     for (var i = 0; i < balancess.length; i++) {
//       totalBalance += balancess[i];
//     }
//     return totalBalance;
//   }
// };

// // Account.prototype.deposit = function (amount) {
// //   if (Number.isInteger(amount) === true) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };
