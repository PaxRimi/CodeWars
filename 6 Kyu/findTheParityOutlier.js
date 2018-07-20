/*Find The Parity Outlier
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// My answer 

function findOutlier(integers){
  let oddCounter = 0;
  let evenCounter = 0; 
  let answer = 0;
  
  for (let i=0; i<3; i++) {
   integers[i] % 2 === 0 ? evenCounter++ : oddCounter++;
  }
  
   if (evenCounter > oddCounter) {
    integers.forEach(function (element) {
      if (element % 2 === 1 || element % 2 === -1) {
        answer = element }});
        
    } else { 
  
    integers.forEach(function (element) {
      if (element % 2 === 0) {
      answer = element; 
    }});}
    
    return answer;
}