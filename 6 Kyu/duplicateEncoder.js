/*Duplicate Encoder
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("


Notes:

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is actually the expected result, not the input! (these languages are locked so that's not possible to correct it).
*/

//My Answer 

function duplicateEncode(word){
    let word2 = word.toLowerCase();
    let answerArr = []; 
    let counter = 0;
    
        for (let i=0; i<word.length; i++ ) {
          for (let j=0; j<=word.length; j++ ) {
            if ( word2.charAt(i) === word2.charAt(j) ) {
              counter++; }
              }
              if (counter >= 2 ) {
              answerArr.push(")"); 
              } else {
              answerArr.push("(");
              }
              counter = 0;
              }
              
    return answerArr.join("");
}
