/*Bit Counting 
Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// My Answer 

var countBits = function(n) {
  let bin = n.toString(2); 
  let answer = 0;
  
    for(let i=0; i<bin.length; i++) {
      if(bin.charAt(i) == 1) {
      answer += 1; 
      }
      }
      
      
    return answer
};