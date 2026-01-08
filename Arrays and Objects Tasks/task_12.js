// Task 12: Count vowels

// Description:
// Counted total vowels (a, e, i, o, u) present in an array of letters.
let letters=["s","f","e","f","e","f","a","g","d","i","g","u","g",]
let count=0
for(i=0;i<=letters.length-1;i++){

  if(letters[i]==='a'|| letters[i]=== "e"|| letters[i]==="i"|| letters[i]==="o"|| letters[i]==="u"){
    count++
    console.log(letters[i]);
  }
}
console.log(count);