"use strict";
/** accepts a string word and a string letters
 * returns a boolean if the word can be made from the letters
 */
function canConstructWord(word, letters) {
  const letterCache = freqCounter(letters);
  const wordCache = freqCounter(word);

  for (let word in wordCache) {
    if (!letterCache[word]) {
      return false;
    }
    if (wordCache[word] > letterCache[word]) {
      return false;
    }
  }
  return true;
 }
/** takes in a string and outputs an object with the letters and its
 * occurences
 */
function freqCounter(string) {
  const freqs = {};

  for (const letter of string) {
    const curr = freqs[letter] || 0;
    freqs[letter] = curr + 1;
  }
  return freqs;
}

