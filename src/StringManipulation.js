//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
 const vowels = 'aeiouAEIOU';
 return str.split('').filter(char => vowels.includes(char)).length;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
  //return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
 return  str.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase());
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  const words = str.split(' ');
  const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  return longestWord
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}