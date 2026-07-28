export default class SimpleBankSystem {
  private balances: number[];
  constructor(balance: number[]) {
    this.balances = [...balance]
  }

  transfer(account1: number, account2: number, money: number): boolean {
    // check both accounts are valid (between 1 and n)
    if (account1 < 1 || account1 > this.balances.length ||
      account2 < 1 || account2 > this.balances.length) {
      return false
    }

    // check account1 has enough balance
    // remember: balances are indexed from 0, so account1 is account1 - 1
    if (this.balances[account1 - 1] < money) {
      return false
    }

    // perform the transfer money
    this.balances[account1 - 1] -= money
    this.balances[account2 - 1] += money
    return true

  }


  deposit(account: number, money: number): boolean {
    //check account is existing
    if (account < 1 || account > this.balances.length) {
      return false
    }

    // add money to the account
    this.balances[account -1] += money
    return true
  }

  withdraw(account: number, money: number): boolean {
    // check if account existing
    if (account < 1 || account > this.balances.length) {
    return false
      }

    // chech if account has enough balance
    if (this.balances[account - 1] < money) {
      return false
    }

    // perform the withdraw
    this.balances[account - 1] -= money
    return true
  }
}
