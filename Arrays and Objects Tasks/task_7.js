// Task 7: Count positive, negative and zero

// Description:
// Counted how many positive, negative, and zero values exist in an array.
let positiveNumbers=0
let NegativeNumbers=0
let zeros=0
let nums = [-1,0,-3,-4,-4,-10,1,2,3,4,5,6,7,8,8,8];
console.log(nums);
nums.forEach((num)=>{
if(num>0){
  positiveNumbers++
} else if(num<0){
  NegativeNumbers++
} else {
  zeros++
}
})
console.log(`Total positive numbers are ${positiveNumbers} and total negative numbers are ${NegativeNumbers} and zeros are ${zeros}`);
