// Task 12: Filter objects and extract values

// Description:
// Used filter to get students who passed and map to extract only their names.
let students = [
  { name: "Ali", marks: 40 },
  { name: "Saad", marks: 75 },
  { name: "Ahmed", marks: 60 }
];
const passStds=students.filter((std)=>{
  if(std.marks >= 50){
    return "saad"
  }
}).map((myStd)=>{
  return myStd.name
})
console.log(passStds);