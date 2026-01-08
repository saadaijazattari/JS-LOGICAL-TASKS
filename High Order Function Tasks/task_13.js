// Task 13: Sum of nested arrays

// Description:
// Used map and reduce to calculate the sum of each inner array.
let arr = [[1,2],[3,4],[5,6]];
let numArays=arr.map((nums)=>{
let sum=nums.reduce((acc,num)=>{
  return acc+num
},0)
  return sum
})
console.log(numArays);