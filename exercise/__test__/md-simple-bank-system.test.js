import { describe, test, expect } from "bun:test"
import SimpleBankSystem from "../medium/simple-bank-system";

describe("Simple Bank System || medium leetcode || Imagine we have several bank accounts numbered 1, 2, 3, ... until n. Each account has a different balance (money). In the code, we keep these balances in an array starting from index 0.", () => {

  let bankSystem = new SimpleBankSystem([10, 100, 20, 50, 30])

  test("should be return true, account 3 has a balance of $20, so it is valid to withdraw $10. Account 3 has $20 - $10 = $10", () => {
    const wd =bankSystem.withdraw(3, 10)
    expect(wd).toBe(true)
  });

  test("return true, account 5 has a balance of $30, so it is valid to transfer $20. Account 5 has $30 - $20 = $10, and account 1 has $10 + $20 = $30", () => {
    const tf =bankSystem.transfer(5,1,10)
    expect(tf).toBe(true)
  });

  test("return true, it is valid to deposit $20 to account 5. Account 5 has $10 + $20 = $30.", () => {
    const depo =bankSystem.deposit(5,20)
    expect(depo).toBe(true)
  });

  test("return false, the current balance of account 3 is $10, so it is invalid to transfer $15 from it.", () => {
    const tf =bankSystem.transfer(3,4,15)
    expect(tf).toBe(false)
  });

  test("return false, it is invalid because account 10 does not exist", () => {
    const wd =bankSystem.withdraw(10, 50)
    expect(wd).toBe(false)
  });
});
