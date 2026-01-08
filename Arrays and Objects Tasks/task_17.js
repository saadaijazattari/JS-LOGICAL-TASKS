// Task 17: Character frequency

// Description:
// Counted how many times each character appears in a string and stored result in an object.
var name="saad"
let res={}
for(i=0;i<name.length;i++){
  console.log(name[i]);
  let char=name[i]
  if(res[char]){
    res[char]=res[char]+1
  } else{
    res[char]=1
  }
}
console.log(res);
