// Task 1: Check number type

// Description:
// Took a number from user and checked whether it is zero, positive, or negative using if-else conditions.
const number=Number(prompt('Enter your Number'))
if(number===0){
  console.log("The number is zero");
  
} else if(number>0){
alert("The number is positive")
} else if(number<0){
  alert('The number is negative')
} else {
  alert('plz enter a number')
}