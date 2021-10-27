## Tests

### Description: pigLatin()
*Test:* "It will add 'way' to the end of words that begin with a vowel."
*Code:* pigLatin("a");
*Expected output:* "away"

*Test:* "If the word begins with a single consonant, it will move to the end and add 'ay.'
*Code:* pigLatin("bat");
*Expected output:* "atbay"

*Test:* "If the word begins with two consonants, it will move both to the end and add 'ay.'
*Code:* pigLatin("brat");
*Expected output:* "atbray"

*Test:* "If the word begins with three consonants, it will move them all to the end and add 'ay.'
*Code:* pigLatin("strong");
*Expected output:* "ongstray"

*Test:* "If the word begins with a 'qu', it will move both the 'q' and the 'u' to the end and add 'ay.'
*Code:* pigLatin("quick");
*Expected output:* "ickquay"

*Test:* "If the initial string of consonants includes a 'q' followed by a 'u', the 'qu' is not moved to the end.
*Code:* pigLatin("squeal");
*Expected output:* "quealsay"

*Test:* "Capitilization will be maintained when moved."
*Code:* pigLatin("Latin");
*Expected output:* "atinLay"

*Test:* "It will return an empty string if it receives an empty string."
*Code:* pigLatin("");
*Expected output:* ""

*Test:* "It will ignore and restore a single punctuation mark at the beginning."
*Code:* pigLatin("!away");
*Expected output:* "!waya"

*Test:* "It will ignore and restore multiple punctuation marks at the beginning."
*Code:* pigLatin("!!!away");
*Expected output:* "!!!waya"

*Test:* "It will ignore and restore a single punctuation mark at the end."
*Code:* pigLatin("away!");
*Expected output:* "waya!"

*Test:* "It will ignore and restore multiple punctuation marks at the end."
*Code:* pigLatin("away!!!");
*Expected output:* "waya!!!"

*Test:* "If the entire string is punctuation marks it will return the same string."
*Code:* pigLatin("!!!");
*Expected output:* "!!!"

*Test:* "Have it treat a punctuation in the middle as a consonant."
*Code:* pigLatin("ss'ax");
*Expected output:* "axss'ay"

*Test:* "All uppercase characters will be treated the same as uppercase.'
*Code:* pigLatin("BrAt");
*Expected output:* "AtBray"

### Description: textToPigLatin()
*Test:* "If it receives an empty string it will return an empty string."
*Code:* textToPigLatin("");
*Expected output:* ""

*Test:* "If it receives one word it will translate that word."
*Code:* textToPigLatin("brat");
*Expected output:* "atbray"

*Test:* "If it receives multiple words it will translate all the words."
*Code:* textToPigLatin("brat brat brat");
*Expected output:* "atbray atbray atbray"

*Test:* "If it receives a sentence with punctuation it should be maintained."
*Code:* textToPigLatin("Hello, hello, hello");
*Expected output:* "elloHay, ellohay, ellohay"