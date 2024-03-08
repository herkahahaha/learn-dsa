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
