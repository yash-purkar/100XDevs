// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");








// WITH EXPLANATION
  



// String: length, indexOf(), lastIndexOf(), slice(), substr(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// 1. length - It calculates the length of the string.
const getLength = (str) => {
  return str.length;
}

console.log(getLength("Yash")); // 4

// 2. indexOf() - It gives the first index of given character or word.
// It will give the start index of word

const getIndexOfChar = (str,char) => {
  return str.indexOf(char);
}

console.log(getIndexOfChar("Yasha", "as")); // 1

// 3. slice() - It allows us to get a particular part of string.
const getSlice = (str,start,end) => {
  return str.slice(start,end); // goes upto end - 1
}

// 3. substr() - It takes the start index and the characters count to extract.
const getSubStr = (str,start,end) => {
  return str.substr(start,end); // goes upto end - 1
}

console.log(getSlice("Viratkohli1234asdf", 5,7)); // ko
console.log(getSubStr("Viratkohli1234asdf", 5,7)); // kohli12

// 4. replace- It replace the given string with given string, 
// 1st parameter - word to replace, 
// 2nd parameter - word to replace by

// It will only replace first occuruance to replace all occurance we can use replaceAll();
const replaceStr = (str,target,replaceWith) => {
 return str.replace(target,replaceWith);
}

console.log(replaceStr("Hii, Heyy How are Heyy you!","Heyy", "HII"));

// 5. split(); - It splits the string into an array by given criteria
const splitStr = (str, splitBy) => {
  return str.split(splitBy);
}

console.log(splitStr("Hii, helo, heyy", ","));

// 6. trim() - It removes the space from starting and from end, but it does not remove the space in between.

const trimString = (str) => {
return str.trim();
}

console.log(trimString("   HE     YY   "));
// "HEYY"