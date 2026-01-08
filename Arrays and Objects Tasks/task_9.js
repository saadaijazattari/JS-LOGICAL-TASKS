// Task 9: Reverse an array

// Description:
// Reversed an array manually using a for loop and stored result in a new array.
let nums = [-1,0,-3,-4,-4,-10,1,2,3,4,5,6,7,8,8,8];
let reversedArray=[]
for (i=nums.length-1;i>=0;i--){
  reversedArray.push(nums[i])
}
console.log(reversedArray);