// Task 11: Reverse sentence words

// Description:
// Split a sentence into words, reversed their order, and joined them back into a sentence.
const splitText=txt.split(' ')
console.log(splitText);
const reversedsplitText=[]
for(let i=splitText.length-1;i>=0;i--){
  console.log(splitText[i]);
  reversedsplitText.push(splitText[i])
}
const reversetxt=reversedsplitText.join(' ')
console.log(reversetxt);