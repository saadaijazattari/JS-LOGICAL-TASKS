// Task 16: Second largest number

// Description:
// Found the second largest number in an array without using sort.
let nums=[2,4,5,3,45,34,54,234,5,4,3,3,45,34]
let largestNum=0
let secondLargestNum=0
for (i=0;i<=nums.length-1;i++){
  if(largestNum<nums[i]){
    largestNum=nums[i]
  }
}
let largestWordIndex=nums.indexOf(largestNum)
nums.splice(largestWordIndex,1)
for (i=0;i<=nums.length-1;i++){
  if(secondLargestNum<nums[i]){
    secondLargestNum=nums[i]
  }
}
console.log(secondLargestNum);
console.log(-Infinity);