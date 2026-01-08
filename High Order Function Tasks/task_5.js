// Task 5: Check condition using some

// Description:
// Used some method to check whether at least one even number exists in the array.
let nums = [3, 7, 9, 11];
const res=nums.some((num)=>{
  return num%2===0
})
console.log(res);