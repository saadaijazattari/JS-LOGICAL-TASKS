// Task 10: Create frequency object using reduce

// Description:
// Used reduce method to count how many times each number appears in the array and stored it in an object.
const nums=[1,3,4,33,43,4,34,34,34]
const fre=nums.reduce((acc,num)=>{
if(acc[num]){
  acc[num]+=1
} else{
  acc[num]=1
}
return acc
},{})
console.log(fre);