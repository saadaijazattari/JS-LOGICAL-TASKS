// Task 6: Check condition using every

// Description:
// Used every method to check whether all numbers in the array are even.
let nums = [3, 7, 9, 11];
const res=nums.every((num)=>{
  return num%2===0
})
console.log(res);