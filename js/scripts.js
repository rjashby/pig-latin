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

isCharPunc(char) {

}

function stripsPunctuation(word) {
  let beginningIndex = 0;
  let endingIndex = 0;
  for (let i = 0; i < word.length; i++) {
    if (!isCharPunc(word[i])) {
      beginningIndex = i;
    }
  }
  for (let i = word.length - 1; i >= 0; i--) {
    if (!isCharPunc(word[i])) {
      endingIndex = i;
    }
  }
  const beginningPunc = word.slice(0, beginningIndex);
  const endingPunc = word.slice(endingIndex + 1, word.length);
  const modifiedWord = word.slice(beginningIndex, endingIndex);
  return [modifiedWord, beginningPunc, endingPunc];
}

function pigLatin(word) {
  if (word === "") {
    return "";
  }
  
  let modifiedWord = get word without punctuation
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