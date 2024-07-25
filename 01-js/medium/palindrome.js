/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const isPalindrome = (str) => {
  let reverStr = "";
  const a = str.split("")?.filter(item => item.trim() !== '').join("");

  //  W - matches any character that's not a letter, digit, or underscore
  const replacedStr = a.replace(/\W/g,"");

  for(let i=replacedStr.length-1;i>=0;i--) {
      reverStr += replacedStr[i]
  }
  return reverStr?.toLowerCase() === replacedStr?.toLowerCase();
}

module.exports = isPalindrome;
