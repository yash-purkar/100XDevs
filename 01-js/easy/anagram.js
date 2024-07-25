/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Listen and Silent
  Elbow and Below
*/

// We'll store the count of each character of a string in the object, and value of count of keys is same in both we'll return true otherwise false.

function isAnagram(str1, str2) {
  // Collecting the number of time of each letter to compare with str2
  const valuesOfStr1 = str1?.split("")?.reduce((acc, curr) => {
    const lowerCaseLetter = curr.toLowerCase();
    if (lowerCaseLetter in acc) {
      return { ...acc, [lowerCaseLetter]: acc[lowerCaseLetter] + 1 };
    } else {
      return { ...acc, [lowerCaseLetter]: 1 };
    }
  }, {});

  // Collecting the number of time of each letter to compare with str1
  const valuesOfStr2 = str2?.split("")?.reduce((acc, curr) => {
    const lowerCaseLetter = curr.toLowerCase();
    if (lowerCaseLetter in acc) {
      return { ...acc, [lowerCaseLetter]: acc[lowerCaseLetter] + 1 };
    } else {
      return { ...acc, [lowerCaseLetter]: 1 };
    }
  }, {});

  // If length is different return false;
  if (Object.keys(valuesOfStr1)?.length !== Object.keys(valuesOfStr2)?.length)
    return false;

  // If the count for any letter is different return false;
  for (let key in valuesOfStr1) {
    if (valuesOfStr1[key] !== valuesOfStr2[key]) return false;
  }

  return true;
}

module.exports = isAnagram;
