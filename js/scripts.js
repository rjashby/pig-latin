function pigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let firstCharIsVowel = false;
  let sliceWord = ("");
  vowels.forEach(function(vowel) {
    if (word.charAt(0) === vowel) {
      firstCharIsVowel = true;
    }
  });
  if (firstCharIsVowel) {
    word = word.concat("way");
  } else {
    sliceWord = word.slice(1);
    word = sliceWord.concat(word.charAt(0) + "ay");
  }
  return word;
}

