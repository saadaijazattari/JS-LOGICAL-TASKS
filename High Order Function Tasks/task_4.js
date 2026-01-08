// Task 4: Find object from array

// Description:
// Used find method to get the first user object whose age is greater than 18.
let users = [
  { name: "Ali", age: 17 },
  { name: "Saad", age: 20 },
  { name: "Ahmed", age: 16 }
];
const youngstd=users.find((user)=>{
  if(user.age>18){
    return true
  }
})
console.log(youngstd);