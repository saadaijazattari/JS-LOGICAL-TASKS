// Task 3: Find largest number

// Description:
// Took three numbers from user and compared them to find the largest number.
const num1=Number(prompt("Enter First Number"))
const num2=Number(prompt("Enter First Number"))
const num3=Number(prompt("Enter First Number"))
if(num1>num2 && num1>num3){
  alert(`${num1} is the largest Number`)
} else if(num2>num3){
  alert(`${num2} is the largest Number`)
}else {
  alert(`${num3} is the largest Number`)
}