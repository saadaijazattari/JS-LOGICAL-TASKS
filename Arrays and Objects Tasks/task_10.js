// Task 10: Unique negative numbers

// Description:
// Extracted unique negative numbers from an array using loop and includes().
let nums = [-1,0,-3,-4,-4,-10,1,2,3,4,5,6,7,8,8,8];
let uniqueNums=[]
for(let i=0;i<=nums.length-1;i++){
  if(!uniqueNums.includes(nums[i]) && nums[i]<0){
    uniqueNums.push(nums[i])
  }
}
console.log(uniqueNums);