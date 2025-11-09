// In a find the best time to buy a stock and sell that stock in a higher profit and return the profiit
// Example => let arr [2,4,6,4,3,1] in this array the first day price is 1 rs and we will buy the the stock in minimum
// amount and sell the element in maximum amount, so buying in 1 and selling in 6 and the profit is 5 rs.
let price = [2,4,4,3,1,6];
let maxProfit = 0;
let min = price[0];
for(let i = 0; i<price.length; i++){
    if(price[i]<min){
        min = price[i]
    }
    let profit = price[i]-min;
    maxProfit = Math.max(maxProfit, profit);
}
console.log(maxProfit);