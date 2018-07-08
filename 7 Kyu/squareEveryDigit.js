/*  Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// My Answer 

function squareDigits(num){
  let str = num.toString(); 
  let sq = ""; 
    for (let i=0; i<str.length; i++) {
      sq += Math.pow(str.charAt(i), 2); }
      return Number(sq);
}