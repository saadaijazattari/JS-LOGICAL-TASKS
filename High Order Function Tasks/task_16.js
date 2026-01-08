// Task 16: Get unique values using reduce

// Description:
// Used reduce method to remove duplicate values and create an array of unique numbers.
let nums = [1,2,2,3,4,4,5];
const res=nums.reduce((acc,num)=>{
  console.log(num);
  if(!acc.includes(num)){
    acc.push(num)
  }
  return acc
},[])
console.log(res);