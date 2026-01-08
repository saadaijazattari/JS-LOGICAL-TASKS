// Task 2: Create new array using map

// Description:
// Used map method to create a new array by doubling each number of the original array.
const nums=[1,3,4,33,43,4,34,34,34]
const squreNums=nums.map((num)=>{
  return num*2
})
console.log(squreNums);