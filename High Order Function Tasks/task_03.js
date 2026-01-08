// Task 3: Filter values greater than a condition

// Description:
// Used filter method to extract numbers greater than 30 from an array.
const nums=[1,3,4,33,43,4,34,34,34]
const bigNums=nums.filter((num)=>{
  if(num>30){
    return true
  }
})
console.log(bigNums);