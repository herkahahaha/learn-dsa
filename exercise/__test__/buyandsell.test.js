import { describe, test, expect } from "bun:test";
import { BuySellStock } from "../medium/buy-and-sell-stock";

describe("On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.", () => {
  test(`Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.`, () => {
    const expected = BuySellStock([1, 2, 3, 4, 5]);
    const result = 4;
    expect(expected).toEqual(result);
  });
  test(`Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.`, () => {
    const expected = BuySellStock([7, 1, 5, 3, 6, 4]);
    const result = 7;
    expect(expected).toEqual(result);
  });
});
