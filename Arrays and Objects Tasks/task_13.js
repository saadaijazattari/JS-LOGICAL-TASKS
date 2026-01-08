// Task 13: Palindrome checker

// Description:
// Checked whether a word is a palindrome by reversing it and comparing with original word.
let word=prompt('Enter a word to find whether it is a palindrome word or not')
let breakedWord=word.split('')
const palindromeArray=[]
for(i=breakedWord.length-1;i>=0;i--){
  palindromeArray.push(breakedWord[i])
}
const palindromeWord=palindromeArray.join('')
if(palindromeWord==word){
  alert(`${word} is a palindrome word`)
} else{
  alert(`${word} is not palindrome word`)
}