import { describe, test, expect } from "bun:test";
import {
  BuySellStock,
  BuySellStock1,
  BuySellStock2,
} from "../medium/buy-and-sell-stock";

describe("On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.", () => {
  test(`should be return 0.`, () => {
    const expected = BuySellStock([7, 6, 4, 3, 1]);
    const result = 0;
    expect(expected).toEqual(result);
  });
  test(`Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.`, () => {
    const expected = BuySellStock2([1, 2, 3, 4, 5]);
    const result = 4;
    expect(expected).toEqual(result);
  });
  test(`should be return 7 in multiple buy-sell profit`, () => {
    const expected = BuySellStock1([7, 1, 5, 3, 6, 4]);
    const result = 7;
    expect(expected).toEqual(result);
  });
  test(`should be return 5 in leetcode single buy-sell profit`, () => {
    const expected = BuySellStock2([7, 1, 5, 3, 6, 4]);
    const result = 5;
    expect(expected).toEqual(result);
  });
});
