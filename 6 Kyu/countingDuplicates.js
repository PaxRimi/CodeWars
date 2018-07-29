/* Counting Duplicates
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//My Answer 

function duplicateCount(text){
  let result = 0;
  let duplicateNumber = 0;
  let arrDup = [];
  let text2 = text.toLowerCase();
  let textArr = text2.split('');
  
      for ( let i=0; i<text.length; i++) {
        for (let j=i; j<text.length; j++) {
          if (textArr[i] === textArr[j]) {
            duplicateNumber++;
               }
            if (duplicateNumber > 1) {
                if (arrDup.indexOf(textArr[i]) === -1) {
              arrDup.push(textArr[i]); 
              result++;
              break;
              }};
        }
        duplicateNumber = 0;
      }
    return result;
}