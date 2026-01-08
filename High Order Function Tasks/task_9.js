// Task 9: Capitalize strings using map

// Description:
// Used map method to capitalize the first letter of each string in an array.
let Names = ["saad", "ali", "ahmed"];
 const Capilatize_Names=Names.map((myName)=>{
  return myName.slice(0,1).toUpperCase() + myName.slice(1,myName.length).toLowerCase();
})
console.log(Capilatize_Names);