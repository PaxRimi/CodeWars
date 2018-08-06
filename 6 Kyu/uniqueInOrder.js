/*Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// My Answer 

var uniqueInOrder=function(iterable){
  
  let answerArr = [];
  
  if (typeof iterable === "string") {
   for (let i=0; i<iterable.length; i++ ) {
    if ( i === 0 ) {
      answerArr.push(iterable.charAt(i)); 
     } else if ( answerArr[answerArr.length - 1] !== iterable.charAt(i) ) {
      answerArr.push(iterable.charAt(i));
      }
     }
   } else {
      for (let i=0; i<iterable.length; i++ ) {
      if ( i === 0 ) {
      answerArr.push(iterable[i]); 
     } else if ( answerArr[answerArr.length - 1] !== iterable[i] ) {
      answerArr.push(iterable[i]);
      }
     }
    }
