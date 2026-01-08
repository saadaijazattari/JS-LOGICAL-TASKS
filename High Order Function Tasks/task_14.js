// Task 14: Chain filter, map and reduce

// Description:
// Filtered even numbers, doubled them, and calculated the final sum using method chaining.
let nums = [1,2,3,4,5,6,7,8,9];
const result=nums.filter((num)=>{
  if(num%2===0){
    return true
  }
}).map((num)=>{
  return num*2
}).reduce((acc,num)=>{
  return acc+num
},0)
console.log(result);