/*

given integer array price where prices[i] is the price of a giveb the i^th day
you can only hold at most one share of stock at any time.
you can buy it then immediatly sell it on the same day
find and return maximum profit tou can achive
[7,1,5,3,6,4]
day 2 => 1 //buy
day 3 => 5 //sell
    profit => 5 - 4 
day 4 => 3 //buy
day 5 => 6 //sell
    profit => 6-3 = 3
total = 6 + 3

for multiple buy and sell
my consern loop prices like this
- currentHoldPrice === -Infinity
- currentNotHold = 0
- for price of prices
  [prevHold, PrevNotHold] = [currentHoldPrice, currentNotHold]
  currentHoldPrice = Math.max(prevHold, prevNotHold - price)
  currentNotHold = Math.max(prevNotHold, prevNotHold + price)
- rteturn currentNotHold


*/

export const BuySellStock = (prices: number[]): number => {
  let [currentHoldPrice, currentNotHold] = [-Infinity, 0];

  for (let price of prices) {
    let [prevHold, prevNotHold] = [currentHoldPrice, currentNotHold];
    currentHoldPrice = Math.max(prevHold, prevNotHold - price);
    currentNotHold = Math.max(prevNotHold, prevHold + price);
  }
  return currentNotHold;
};

// multiple buy and sell
export const BuySellStock1 = (prices: number[]): number => {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
};

// pass on leetcode
export function BuySellStock2(prices: number[]): number {
  // prices.sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    // console.log(prices[right]);
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
}
