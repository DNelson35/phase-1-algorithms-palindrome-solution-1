function isPalindrome(word) {
  // Write your algorithm here
  let arr = word.split('')
  return (word === arr.reverse().join(''))? true : false
}

/* 
  Add your pseudocode here
  take word reverse it and set up if
  function a (word){
    reverse word
    if(word === reverse word){
      return true
    }else{
      return false
    }
  }
*/

/*
  Add written explanation of your solution here
  function takes a word converts the word to an array with split

  then i use a ternary statment to check the condition of ture or false

  i compare the word passed to the function to the array i created with the reverse and the join method called on it. This will return the arr of the word in revese and joined back to a string

  if the string is equal to the word string passed it returns true if not false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
