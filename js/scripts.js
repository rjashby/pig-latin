function isCharVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}

function findFirstVowelIndex(word) {
  const wordArray = word.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (isCharVowel(wordArray[i])) {
      return i;
    }
  }
  return -1;
}

function pigLatin(word) {
  let sliceWord = ("");  
  if (isCharVowel(word[0])) {
    word = word.concat("way");
  } else {
    sliceWord = word.slice(1);
    word = sliceWord.concat(word.charAt(0) + "ay");
  }
  return word;
}

brat

br at

b r a t
0 1 2 3

find index of first vowel
strStartingWithVowel = str.slice(i)
strConsonants = str.slice(0, i - 1)
word = strVowel.concat(strConson + "ay")