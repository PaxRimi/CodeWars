/* Find the odd int
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// My Answer 

function findOdd(A) {
  
    A.sort(function(a,b) {
    return a - b });
    
    for(let i=0; i<A.length; i++) {
      if (A[i] === A[i+1]) {
        i++ 
      } else {
        return A[i]
        }
        };
}