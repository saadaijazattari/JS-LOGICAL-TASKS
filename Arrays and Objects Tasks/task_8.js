// Task 8: Find maximum number

// Description:
// Traversed an array to find the maximum number without using Math.max.
let nums = [-1,0,-3,-4,-4,-10,1,2,3,4,5,6,7,8,8,8];
console.log(nums);
let maxNum=0
nums.forEach((num)=>{
  if(maxNum<num){
    maxNum=num 
  }
})
console.log(maxNum);