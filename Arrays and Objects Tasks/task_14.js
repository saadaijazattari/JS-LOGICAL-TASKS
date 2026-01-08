// Task 14: Count words in sentence

// Description:
// Counted the total number of words in a sentence entered by user.
const sentence=prompt('Enter a sentence to find words in the sentence')
const sentenceArray=sentence.split(' ').filter(word => word !== '');
console.log(sentenceArray.length);
console.log(sentenceArray);