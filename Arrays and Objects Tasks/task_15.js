// Task 15: Capitalize sentence

// Description:
// Converted each word of a sentence so that its first letter is capitalized.
let sentence ="i am saad aijaz and i am studying in FirsT year"
let newsentenceArray=[]
let sentenceArray=sentence.split(' ')
console.log(sentence);
console.log(sentenceArray);
sentenceArray.forEach((word)=>{
  let splicedWord=word.slice(0,1).toUpperCase()+word.slice(1,word.length).toLowerCase()
  newsentenceArray.push(splicedWord)
  console.log(word);
  console.log(splicedWord);
})
 let newsentence=newsentenceArray.join(' ')
console.log(newsentenceArray);
console.log(newsentence);