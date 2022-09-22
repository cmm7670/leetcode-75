/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (x = 0; x < prices.length; x++) {
        if (prices[x] < minPrice) {
            minPrice = prices[x];
        } else if (prices[x] - minPrice > maxProfit){
            maxProfit = prices[x] - minPrice;
        }
    }
    return maxProfit;
};