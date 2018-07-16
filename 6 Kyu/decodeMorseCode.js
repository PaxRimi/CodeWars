/*Decode the Morse code 

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, Go, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE_CODE['.--'], in Java it is MorseCode.get(".--"), in C# it is MorseCode.Get(".--") (returns string), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! ".--", in Elixir it is morse_codes variable, in Rust it is self.morse_code.

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

Good luck!

After you complete this kata, you may try yourself at Decode the Morse code, advanced.
*/

// My Answer 

decodeMorse = function(morseCode){
   let result = "";
   let wordArr = stringMorseCode.split("   ");
     for (let i=0; i<wordArr.length; i++ ) {
       wordArr[i] = wordArr[i].split(" ");
       for (let j=0; j<wordArr[i].length; j++) {
         result += MORSE_CODE[wordArr[i][j]]; }
         if ( i<wordArr.length -1) {
         result += " "; }
         }
    return result;
}