// Task 7: Calculate sum using reduce

// Description:
// Used reduce method to calculate the total sum of all numbers in an array.
const nums=[1,3,4,33,43,4,34,34,34]
const total=nums.reduce((acc,num)=>{
return acc+num
},0)
console.log(total);