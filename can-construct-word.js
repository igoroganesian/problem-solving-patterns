"use strict";

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

function freqCounter(string) {
  const freqs = {};

  for (const letter of string) {
    const curr = freqs[letter] || 0;
    freqs[letter] = curr + 1;
  }
  return freqs;
}

