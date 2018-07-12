/* Two to One
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```
*/


//My Answer 

function longest(s1, s2) {
  let str = s1 + s2;
  let Arr = str.split('').sort();
  let answerArr = []; 
    for (let i=0; i<Arr.length; i++) {
      if (answerArr.indexOf(Arr[i].toLowerCase()) === -1 ) {
        answerArr.push(Arr[i].toLowerCase()); 
        }
        }
      return answerArr.join('');
}