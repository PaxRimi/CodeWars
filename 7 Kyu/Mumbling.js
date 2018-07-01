/* Mumbling 
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// My answer :

function accum(s) {
	let str = "";
    for (let i=0; i<s.length; i++) {
      for (let j=1; j<=(i+1); j++) {
        if (j === 1 ) {
          str += `${s.charAt(i).toUpperCase()}`; 
          }
        else { str += `${s.charAt(i).toLowerCase()}`;
        }
      }
    if ( i !== (s.length - 1) )
    str += `-`;
    }
  return str
}