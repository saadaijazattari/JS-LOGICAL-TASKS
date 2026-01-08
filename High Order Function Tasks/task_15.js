// Task 15: Sort objects and extract names

// Description:
// Used sort method to arrange students by marks in descending order and map to get their names.
let students = [
  {name:"Ali", marks: 40},
  {name:"Saad", marks: 75},
  {name:"Ahmed", marks: 60}
];
let names = students
  .sort((a, b) => b.marks - a.marks) 
  .map((std) => std.name);           

console.log(names);