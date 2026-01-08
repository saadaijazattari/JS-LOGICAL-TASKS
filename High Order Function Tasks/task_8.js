// Task 8: Filter and transform data

// Description:
// Used filter to get even numbers and map to double those values.
const nums=[1,3,4,33,43,4,34,34,34]
const result=nums.filter((num)=>{
  if(num%2===0){
    return true
  }
}).map((EvenNums)=>{
  return EvenNums*2
})
console.log(result);