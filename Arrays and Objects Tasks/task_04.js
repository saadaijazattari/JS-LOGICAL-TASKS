// Task 4: Multiplication table

// Description:
// Generated a multiplication table of a given number up to a user-defined range using a loop.
const num=Number(prompt('Enter What number for table you want to generate'))
const range=Number(prompt('From where ?'))
for(i=1;i<=range;i++){
  document.write(`${num} x ${i} = ${num*i}`);
}