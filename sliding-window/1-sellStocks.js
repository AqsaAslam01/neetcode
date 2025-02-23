function sellStocks(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

console.log(sellStocks([10,1,5,6,7,1]))