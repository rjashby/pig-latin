function pigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let firstCharIsVowel = false;
  vowels.forEach(function(vowel) {
    if (word.charAt(0) === vowel) {
      firstCharIsVowel = true;
    }
  });
  if (firstCharIsVowel) {
    word = word.concat("way");
  }

  if (!(firstCharIsVowel)) {
    word = word.concat("ay");
  }
  return word;
}