// Task 11: Apply discount using map

// Description:
// Used map method to apply a percentage discount to each price in the array.
let prices = [100, 200, 300];
const discountPrices=prices.map((price)=>{
return price-((20/100)*price)
})
console.log(discountPrices);