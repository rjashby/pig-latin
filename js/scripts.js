function pigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let firstCharIsVowel = false;
  vowels.forEach(function(vowel) {
    if (word.charAt(0) === vowel) {
      firstCharIsVowel = true;
    }
  });
  if (firstCharIsVowel) {
    word.concat("way");
  }
  return word;
}