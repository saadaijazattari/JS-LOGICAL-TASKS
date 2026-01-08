// Task 17: Flatten nested arrays

// Description:
// Used reduce and forEach to convert a nested array into a single flat array.
let arr = [[1,2],[3,4],[5,6],[7,8]];
const res=arr.reduce((acc,nums)=>{
nums.forEach((num)=>{
console.log(num);
    acc.push(num)
  })
return acc
},[])
console.log(res);