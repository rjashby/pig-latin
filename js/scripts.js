function isCharVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
/* word must not start with a vowel */
function findFirstVowelIndex(word) {
  const wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (isCharVowel(wordArray[i])) {
      if (wordArray[i].toLowerCase() === "u" && wordArray[i - 1].toLowerCase() == "q") {
        return i - 1;
      }
      return i;
    }
  }
  return -1;
}

function pigLatin(word) {
  if (isCharVowel(word[0])) {
    word = word.concat("way");
  } else if (word[0].toLowerCase() === "q") {
      const wordRemainder = word.slice(2, word.length);
      word = wordRemainder.concat("quay");
  } else {
    const firstVowelIndex = findFirstVowelIndex(word);
    if (firstVowelIndex !== -1) {
      const sliceToVowel = word.slice(0, firstVowelIndex);
      const sliceFromVowel = word.slice(firstVowelIndex, word.length);
      word = sliceFromVowel.concat(sliceToVowel + "ay");
    } else {
      word = word.concat("ay");
    }
  }
  return word;
}