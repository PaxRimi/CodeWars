/* Persistent Bugger.
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

//My Answer 

function persistence(num) {
   let a = num.toString()
   let counter = 0; 
   let b = 0;
   let c = 0;
   
    while (a.length > 1) {
       counter++;
       b = a.split('');
        
       c = b.reduce(function (prew,curr) {
         return prew * curr });
         
      a = c.toString() }
         
         
    return counter;
}