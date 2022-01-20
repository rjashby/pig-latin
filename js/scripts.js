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

function isCharPunc(char) {
  const punctuation = [",", ".", ";", ":", "?", "!", "-", "\""];
  for (let i = 0; i < punctuation.length; i++) {
    if(char === punctuation[i]) {
      return true;
    }
  } 
  return false;      
}

function stripsPunctuation(word) {
  let beginningIndex = 0;
  let endingIndex = 0;
  for (let i = 0; i < word.length; i++) {
    if (!isCharPunc(word[i])) {
      beginningIndex = i;
      break;
    }
  }
  foundIndex = false;
  for (let i = word.length - 1; i >= 0; i--) {
    if (!isCharPunc(word[i])) {
      endingIndex = i;
      break;
    }
  }
  const beginningPunc = word.slice(0, beginningIndex);
  const endingPunc = word.slice(endingIndex + 1, word.length);
  const modifiedWord = word.slice(beginningIndex, endingIndex + 1);
  return [modifiedWord, beginningPunc, endingPunc];
}

function pigLatin(word) {
  if (word === "") {
    return "";
  }
  const punc = stripsPunctuation(word);
  let modWord = punc[0];
  if (isCharVowel(modWord[0])) {
    modWord = modWord.concat("way");
  } else if (modWord[0].toLowerCase() === "q") {
      const wordRemainder = modWord.slice(2, modWord.length);
      modWord = wordRemainder.concat("quay");
  } else {
    const firstVowelIndex = findFirstVowelIndex(modWord);
    if (firstVowelIndex !== -1) {
      const sliceToVowel = modWord.slice(0, firstVowelIndex);
      const sliceFromVowel = modWord.slice(firstVowelIndex, modWord.length);
      modWord = sliceFromVowel.concat(sliceToVowel + "ay");
    } else {
      modWord = modWord.concat("ay");
    }
  }  
  return punc[1] + modWord + punc[2];
}

function fullPigLatin(text) {
  let pigArray = text.split(" ");
  let finalArray = [];
  pigArray.forEach(function(word) {
    finalArray.push(pigLatin(word));
  })
  return finalArray.join(" ");
}