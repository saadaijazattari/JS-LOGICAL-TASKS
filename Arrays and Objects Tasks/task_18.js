// Task 18: Largest word in sentence

// Description:
// Found the longest word in a sentence and displayed its length.
let sentence=prompt('Enter your sentence to find biggest word in your sentence')
let splitArraySentence=sentence.split(" ").filter(word => word !== '');
let biggestWord=""
for(i=0;i<splitArraySentence.length;i++){

  if(biggestWord.length<splitArraySentence[i].length){
    biggestWord=splitArraySentence[i]
  }
}
alert(`Your highest letters of a word in your sentence is ${biggestWord} and its length is ${biggestWord.length}`)